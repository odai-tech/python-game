import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Send, X, ChevronDown, Bot, User,
  Loader2, AlertTriangle, AlertCircle, CheckCircle2
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './AIAssistant.css';

const API_CHAT    = 'http://localhost:3001/api/chat';
const API_ANALYZE = 'http://localhost:3001/api/analyze-error';

// ── Quick-action chips ────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { label: '🐛 Explain my error',         prompt: 'explain_error' },
  { label: '💡 Give me a coding tip',     prompt: 'tip' },
  { label: '❓ What is indentation?',      prompt: 'What is indentation in Python and why does it matter?' },
  { label: '📖 How do variables work?',   prompt: 'How do variables work in Python? Give a simple example.' },
];

// ── Streaming fetch ───────────────────────────────────────────────────────────
async function streamChat(messages, onChunk, onDone, onError) {
  try {
    const res = await fetch(API_CHAT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ messages }),
    });
    if (!res.ok) { onError(`Server error ${res.status}.`); return; }

    const reader  = res.body.getReader();
    const decoder = new TextDecoder();
    let   buffer  = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') { onDone(); return; }
        try {
          const p = JSON.parse(data);
          if (p.error) { onError(p.error); return; }
          if (p.text)  onChunk(p.text);
        } catch { /* skip malformed */ }
      }
    }
    onDone();
  } catch (err) {
    onError(err.message.includes('fetch')
      ? "Can't reach the AI server. Make sure you ran `npm run dev`."
      : err.message);
  }
}

// ── Fetch structured error highlights ────────────────────────────────────────
async function fetchHighlights(code, error) {
  try {
    const res  = await fetch(API_ANALYZE, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ code, error }),
    });
    const data = await res.json();
    return data.highlights || [];
  } catch { return []; }
}

// ── Error highlight panel (shown above AI bubbles when there's an error) ──────
function ErrorHighlightPanel({ highlights, code }) {
  if (!highlights || highlights.length === 0) return null;
  const codeLines = (code || '').split('\n');

  return (
    <motion.div
      className="ai-error-highlight"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="ai-error-highlight-title">
        <AlertCircle size={13} /> Problematic line{highlights.length > 1 ? 's' : ''} detected
      </p>
      {highlights.map((h, i) => {
        const lineIdx = h.line - 1;
        const before  = codeLines[lineIdx - 1];
        const bad     = codeLines[lineIdx];
        const after   = codeLines[lineIdx + 1];

        return (
          <div key={i} className="ai-highlight-block">
            <div className="ai-code-diff">
              {before  !== undefined && <div className="ai-code-line normal">{before || ' '}</div>}
              {bad     !== undefined && <div className="ai-code-line bad">⚠ {bad}</div>}
              {after   !== undefined && <div className="ai-code-line normal">{after  || ' '}</div>}
            </div>
            <p className="ai-highlight-reason">
              <AlertTriangle size={11} className="ai-warn-icon" />
              <strong>Line {h.line}:</strong> {h.reason}
            </p>
            {h.fix && (
              <p className="ai-highlight-fix">
                <CheckCircle2 size={11} className="ai-fix-icon" />
                Fix: <code className="ai-fix-code">{h.fix}</code>
              </p>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

// ── Markdown message bubble ───────────────────────────────────────────────────
function Bubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      className={`bubble-row ${isUser ? 'user' : 'ai'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`bubble-avatar ${isUser ? 'user' : 'ai'}`}>
        {isUser ? <User size={13} /> : <Bot size={13} />}
      </div>
      <div className={`bubble ${isUser ? 'user' : 'ai'} ${msg.streaming ? 'streaming' : ''}`}>
        {isUser
          ? <p>{msg.content}</p>
          : <ReactMarkdown
              components={{
                code({ inline, children }) {
                  return inline
                    ? <code className="md-inline-code">{children}</code>
                    : <pre className="md-code-block"><code>{children}</code></pre>;
                },
                p({ children }) { return <p className="md-p">{children}</p>; },
              }}
            >{msg.content || ' '}</ReactMarkdown>
        }
        {msg.streaming && <span className="cursor-blink">▋</span>}
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AIAssistant({
  currentCode,
  currentError,
  currentLevel,
  isSuccess,
  onHighlightsReady,   // callback → passes highlight data up to App for Monaco
}) {
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [serverOk, setServerOk]   = useState(null);
  const [unread, setUnread]       = useState(0);
  const [highlights, setHighlights] = useState([]);
  const [analyzingError, setAnalyzingError] = useState(false);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input + clear unread badge when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setUnread(0);
    }
  }, [open]);

  // Ping server once on mount
  useEffect(() => {
    fetch(API_CHAT, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [{ role: 'user', content: 'hi' }] })
    }).then(() => setServerOk(true)).catch(() => setServerOk(false));
  }, []);

  // ── Auto-react to errors: highlight + explain ─────────────────────────────
  const lastErrorRef = useRef(null);

  useEffect(() => {
    if (!currentError || currentError === lastErrorRef.current) return;
    lastErrorRef.current = currentError;

    // Increment badge if chat is closed
    if (!open) setUnread(n => n + 1);

    // Clear old highlights
    setHighlights([]);
    onHighlightsReady?.([]);

    // 1. Get structured highlights from the dedicated endpoint
    setAnalyzingError(true);
    fetchHighlights(currentCode, currentError).then(hl => {
      setHighlights(hl);
      onHighlightsReady?.(hl);
      setAnalyzingError(false);
    });

    // 2. Auto-send explanation to chat
    const userMsg = buildErrorContext(currentError, currentCode, currentLevel);
    sendMessage(userMsg, true);
  }, [currentError]); // eslint-disable-line

  // Clear highlights when code runs successfully
  useEffect(() => {
    if (isSuccess) {
      setHighlights([]);
      onHighlightsReady?.([]);
    }
  }, [isSuccess]); // eslint-disable-line

  // ── Send a message ──────────────────────────────────────────────────────
  const sendMessage = useCallback(async (text, isAuto = false) => {
    const userText = text.trim();
    if (!userText || loading) return;

    setInput('');
    setLoading(true);
    if (!isAuto) setOpen(true);   // open panel when user explicitly sends

    const userMsg = { role: 'user',      content: userText };
    const aiMsg   = { role: 'assistant', content: '', streaming: true, id: Date.now() };

    setMessages(prev => [...prev, userMsg, aiMsg]);

    // Build history without the streaming placeholder
    const history = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));

    await streamChat(
      history,
      (chunk) => {
        setMessages(prev => prev.map(m =>
          m.id === aiMsg.id ? { ...m, content: m.content + chunk } : m
        ));
        if (!open) setUnread(n => n + 1);
      },
      () => {
        setMessages(prev => prev.map(m =>
          m.id === aiMsg.id ? { ...m, streaming: false } : m
        ));
        setLoading(false);
        setServerOk(true);
      },
      (err) => {
        setMessages(prev => prev.map(m =>
          m.id === aiMsg.id ? { ...m, content: `⚠️ ${err}`, streaming: false } : m
        ));
        setLoading(false);
        setServerOk(false);
      }
    );
  }, [loading, messages, open]);

  // ── Quick action chips ────────────────────────────────────────────────────
  function handleQuickAction(action) {
    let text = action.prompt;
    if (action.prompt === 'explain_error') {
      text = currentError
        ? buildErrorContext(currentError, currentCode, currentLevel)
        : `Here's my code:\n\`\`\`python\n${currentCode || '# (empty)'}\n\`\`\`\nDoes anything look wrong?`;
    } else if (action.prompt === 'tip') {
      text = `Give me a useful Python beginner tip related to "${currentLevel?.title || 'getting started'}".`;
    }
    sendMessage(text);
  }

  const hasMessages = messages.length > 0;

  return (
    <>
      {/* ── FAB ─────────────────────────────────────────────────────── */}
      <motion.button
        className={`ai-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        title="Ask Pylo AI"
      >
        {open ? <ChevronDown size={20} /> : <Sparkles size={20} />}
        {!open && <span className="ai-fab-label">Ask Pylo</span>}
        {!open && unread > 0 && <span className="ai-badge">{unread > 9 ? '9+' : unread}</span>}
      </motion.button>

      {/* ── Chat panel ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-panel glass-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            {/* Header */}
            <div className="ai-header">
              <div className="ai-header-left">
                <div className="ai-avatar"><Sparkles size={15} /></div>
                <div>
                  <p className="ai-name">Pylo</p>
                  <p className="ai-subtitle">
                    {analyzingError ? '🔍 Analysing your error…' : 'AI Python Tutor'}
                  </p>
                </div>
              </div>
              <div className="ai-header-right">
                {serverOk === false && (
                  <span className="ai-server-warn" title="AI server offline">
                    <AlertTriangle size={13} /> offline
                  </span>
                )}
                <button className="ai-close" onClick={() => setOpen(false)}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="ai-messages">

              {/* Error highlight panel — shown at top when there are highlights */}
              <ErrorHighlightPanel highlights={highlights} code={currentCode} />

              {/* Empty / welcome state */}
              {!hasMessages && (
                <div className="ai-empty">
                  <div className="ai-empty-avatar"><Sparkles size={22} /></div>
                  <p className="ai-empty-title">Hi! I'm Pylo 👋</p>
                  <p className="ai-empty-body">
                    I'm your personal Python tutor. I automatically explain every error you get
                    and highlight the exact problematic line — just ask me anything!
                  </p>
                  <div className="ai-quick-actions">
                    {QUICK_ACTIONS.map(a => (
                      <button key={a.label} className="ai-chip" onClick={() => handleQuickAction(a)}>
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((msg, i) => (
                <Bubble key={msg.id ?? i} msg={msg} />
              ))}

              {isSuccess && hasMessages === false && (
                <motion.div
                  className="ai-success-tip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  🎉 Level complete! Ask me anything about what you just learned.
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <form
              className="ai-input-row"
              onSubmit={e => { e.preventDefault(); sendMessage(input); }}
            >
              <input
                ref={inputRef}
                className="ai-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask anything about Python…"
                disabled={loading}
              />
              <button
                type="submit"
                className="ai-send"
                disabled={!input.trim() || loading}
              >
                {loading
                  ? <Loader2 size={16} className="spin" />
                  : <Send size={16} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function buildErrorContext(error, code, level) {
  const ctx = level ? `\nContext: we're learning "${level.title}" (${level.concept}).` : '';
  return `I got this error:\n\`\`\`\n${error}\n\`\`\`\nHere's my code:\n\`\`\`python\n${code || '# (empty)'}\n\`\`\`${ctx}\nWhat went wrong and how do I fix it?`;
}
