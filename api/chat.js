import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
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
}
