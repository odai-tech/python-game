// ─── PyQuest AI Proxy Server ─────────────────────────────────────────────────
// Keeps the Gemini API key secret on the server side.
// The frontend calls /api/chat — this server forwards to Gemini and streams
// the response back. Users never see the key.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

app.use(cors({ origin: '*' }));
app.use(express.json());

// ── System prompt: friendly Python tutor persona ──────────────────────────────
const SYSTEM_PROMPT = `You are Pylo, a friendly and encouraging Python tutor built into PyQuest, a coding game for beginners.

Your personality:
- Warm, patient, and encouraging — like a great teacher
- Use simple, clear language. Explain jargon when you use it.
- Keep answers SHORT: 2-5 sentences normally. Use a short code block only when genuinely needed.
- Use one emoji per message at most.
- Always end error explanations with ONE concrete "try this" fix.

Your job:
1. ERROR ANALYSIS: When given Python error + code, explain in plain English what went wrong, point to the exact problematic line, and give a one-line fix example.
2. GENERAL QUESTIONS: Answer simply. Include a tiny example if it helps understanding.
3. SUCCESS: Give a short encouraging message + one "did you know" bonus tip.
4. Never write the FULL solution. Guide them to it.

Formatting rules:
- Inline code: \`x = 5\`
- Multi-line code: triple backticks with python label
- Max 3 bullet points
- No headers (##) — keep it conversational

IMPORTANT for error explanations:
When analysing an error, structure your reply like this:
1. Plain-English explanation of what the error means (1-2 sentences)
2. Point to the specific line or token that caused it
3. Show the fix with a short before/after code snippet
4. Briefly explain WHY that fix works`;

// ── POST /api/chat  (streaming) ───────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({
      history,
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    });

    const result = await chat.sendMessageStream(lastMessage.content);

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error('Gemini error:', err.message);
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    res.end();
  }
});

// ── POST /api/analyze-error  (returns structured JSON for editor highlights) ──
app.post('/api/analyze-error', async (req, res) => {
  const { code, error } = req.body;
  if (!code || !error) return res.status(400).json({ highlights: [] });

  const prompt = `Given this Python error:
\`\`\`
${error}
\`\`\`

And this code:
\`\`\`python
${code}
\`\`\`

Return ONLY a JSON array (no other text) where each item has:
- "line": 1-based line number of the problematic code line
- "reason": one short sentence explaining why that line is wrong
- "fix": the corrected version of just that line

Example: [{"line": 3, "reason": "Missing colon at end of if statement", "fix": "if x > 0:"}]

If the error is not traceable to a specific line, return [].`;

  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text().trim() || '[]';
    // Extract JSON from response (model might add markdown fences)
    const jsonMatch = raw.match(/\[[\s\S]*\]/);
    const highlights = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    res.json({ highlights });
  } catch (err) {
    console.error('analyze-error failed:', err.message);
    res.json({ highlights: [] });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🤖 Pylo AI server → http://localhost:${PORT}`);
  if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️  GEMINI_API_KEY is not set in .env — AI features will fail.');
  }
});
