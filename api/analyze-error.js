import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, error } = req.body;
  if (!code || !error) {
    return res.json({ highlights: [] });
  }

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
    const jsonMatch = raw.match(/\[[\s\S]*\]/);
    const highlights = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    res.json({ highlights });
  } catch (err) {
    console.error('analyze-error failed:', err.message);
    res.json({ highlights: [] });
  }
}
