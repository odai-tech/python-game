import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Lightbulb, ChevronRight, RotateCcw, Zap, AlertTriangle } from 'lucide-react';

// ── Confetti ──────────────────────────────────────────────────────────────────
const CONFETTI_COLORS = ['#6366f1','#10b981','#f59e0b','#ec4899','#06b6d4','#a78bfa'];

function Confetti({ light }) {
  const dots = Array.from({ length: light ? 14 : 28 }, (_, i) => ({
    id: i,
    left:  `${5 + Math.random() * 90}%`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 0.5,
    dur:   0.9 + Math.random() * 0.8,
    size:  6 + Math.random() * 8,
  }));
  return (
    <div className="confetti-wrap">
      {dots.map(d => (
        <div key={d.id} className="confetti-dot" style={{
          left: d.left, background: d.color,
          width: d.size, height: d.size,
          animationDuration: `${d.dur}s`,
          animationDelay: `${d.delay}s`,
        }} />
      ))}
    </div>
  );
}

// ── Line diff viewer ──────────────────────────────────────────────────────────
function LineDiff({ lineDiff }) {
  if (!lineDiff || lineDiff.every(l => l.match)) return null;
  const mismatches = lineDiff.filter(l => !l.match);
  if (mismatches.length === 0) return null;

  return (
    <div className="feedback-diff">
      <p className="feedback-diff-title">Output vs expected:</p>
      {lineDiff.map((l, i) => (
        <div key={i} className={`diff-row ${l.match ? 'match' : 'mismatch'}`}>
          <span className="diff-label">{l.match ? '✓' : '✗'}</span>
          <div className="diff-cols">
            {!l.match && (
              <>
                <span className="diff-got">got:      <code>{l.actual   || '(nothing)'}</code></span>
                <span className="diff-want">expected: <code>{l.expected || '(nothing)'}</code></span>
              </>
            )}
            {l.match && <span className="diff-ok"><code>{l.actual}</code></span>}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Message pools ─────────────────────────────────────────────────────────────
const PERFECT_MSGS = [
  "You're crushing it! One step closer to Python mastery 🔥",
  "Nailed it! Your brain just got a little more pythonic 🐍",
  "Brilliant! That's exactly how a real programmer thinks.",
  "Perfect! Keep this momentum going — you're unstoppable!",
  "Amazing work! That code made the computer very happy 💻",
];
const CLOSE_MSGS = [
  "So close! The logic is solid — just a tiny formatting difference.",
  "Your thinking is correct! Python just needs it written precisely.",
  "Nearly there! Small details matter in code — you're learning fast.",
];
const WRONG_MSGS = [
  "Not quite — but every error is a lesson in disguise!",
  "Almost! Bugs happen to every programmer. Let's figure it out.",
  "Close! Even senior devs Google errors every day 😄",
  "Not yet — check the hint below and give it another shot!",
];

export default function FeedbackOverlay({
  visible,
  type,         // 'success' | 'wrong'
  grade,        // 'perfect' | 'close' | 'wrong'
  xp,
  reason,       // grader's human-readable explanation
  lineDiff,     // array from diffLines()
  levelHint,
  onNext,
  onShowHint,
  onDismiss,
  attemptCount,
}) {
  const msgRef = useRef('');

  useEffect(() => {
    if (!visible) return;
    if (grade === 'perfect') msgRef.current = PERFECT_MSGS[Math.floor(Math.random() * PERFECT_MSGS.length)];
    else if (grade === 'close') msgRef.current = CLOSE_MSGS[Math.floor(Math.random() * CLOSE_MSGS.length)];
    else msgRef.current = WRONG_MSGS[Math.floor(Math.random() * WRONG_MSGS.length)];
  }, [visible, grade]);

  // Auto-dismiss perfect successes after 4 s
  useEffect(() => {
    if (!visible || type !== 'success' || grade !== 'perfect') return;
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [visible, type, grade, onDismiss]);

  const isSuccess  = type === 'success';
  const isPerfect  = grade === 'perfect';
  const isClose    = grade === 'close';
  const showHintTip = !isSuccess && attemptCount >= 1;

  // Card style based on grade
  const cardClass = isPerfect ? 'success-card' : isClose ? 'close-card' : 'error-card';
  const emoji     = isPerfect ? '🏆' : isClose ? '⭐' : '😅';
  const title     = isPerfect ? 'Level Complete!' : isClose ? 'Close Enough!' : 'Not quite…';

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Dim backdrop */}
          <motion.div
            className="feedback-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: 'rgba(0,0,0,.6)', pointerEvents: 'all', cursor: 'pointer' }}
            onClick={onDismiss}
          />

          {/* Card */}
          <motion.div className="feedback-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className={`feedback-card ${cardClass}`}
              initial={{ scale: 0.72, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.82, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="feedback-glow" />
              {isSuccess && <Confetti light={isClose} />}

              {/* Emoji */}
              <motion.div
                className="feedback-emoji"
                animate={isSuccess
                  ? { rotate: [0, -10, 10, -8, 8, 0], scale: [1, 1.2, 1] }
                  : { x: [0, -8, 8, -6, 6, 0] }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {emoji}
              </motion.div>

              {/* Title */}
              <motion.h2 className="feedback-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {title}
              </motion.h2>

              {/* Pool message */}
              <motion.p className="feedback-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.27 }}>
                {msgRef.current}
              </motion.p>

              {/* Grader reason — shown for close and wrong (not for generic perfect) */}
              {reason && (isPerfect === false || isClose) && (
                <motion.div
                  className={`feedback-reason ${isClose ? 'reason-close' : 'reason-wrong'}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                >
                  <AlertTriangle size={13} />
                  <span>{reason}</span>
                </motion.div>
              )}

              {/* XP badge */}
              {isSuccess && (
                <motion.div
                  className={`feedback-xp-badge ${isClose ? 'partial-xp' : ''}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.35 }}
                >
                  <Zap size={18} />
                  {isClose ? `+${xp} XP  (70% — minor formatting)` : `+${xp} XP earned!`}
                </motion.div>
              )}

              {/* Stars — 3 for perfect, 2 for close */}
              {isSuccess && (
                <motion.div style={{ display: 'flex', gap: 4 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44 }}>
                  {[0, 1, 2].map(i => (
                    <motion.div key={i} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', delay: 0.5 + i * 0.1 }}>
                      <Star
                        size={22}
                        fill={i < (isPerfect ? 3 : 2) ? '#f59e0b' : 'transparent'}
                        color="#f59e0b"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Diff viewer — shown for close and wrong */}
              {(isClose || !isSuccess) && lineDiff && (
                <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}>
                  <LineDiff lineDiff={lineDiff} />
                </motion.div>
              )}

              {/* Hint teaser on wrong after first attempt */}
              {showHintTip && !isSuccess && (
                <motion.div className="feedback-hint-teaser" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Lightbulb size={14} className="feedback-hint-icon" />
                  <span className="feedback-hint-text">
                    {levelHint?.split('\n')[0] ?? 'Click "Show Hint" for a code example.'}
                  </span>
                </motion.div>
              )}

              {/* Actions */}
              <motion.div className="feedback-actions" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {isSuccess ? (
                  <>
                    <button className="btn btn-ghost btn-sm" onClick={onDismiss}>Stay here</button>
                    {onNext && (
                      <button className="btn btn-primary" onClick={onNext}>
                        Next Level <ChevronRight size={15} />
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <button className="btn btn-ghost btn-sm" onClick={() => { onShowHint(); onDismiss(); }}>
                      <Lightbulb size={14} /> Show Hint
                    </button>
                    <button className="btn btn-primary" onClick={onDismiss}>
                      <RotateCcw size={14} /> Try Again
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
