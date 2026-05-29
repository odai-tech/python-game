import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import './Tutorial.css';

const TUTORIAL_KEY = 'pyquest_tutorial_done';

// Each step targets an element via CSS selector and shows a tooltip
const STEPS = [
  {
    id: 'welcome',
    title: '👋 Welcome to PyQuest!',
    body: "This quick tour will show you everything you need to get started. You'll be writing real Python code in seconds!",
    target: null, // full-screen welcome card
    position: 'center',
  },
  {
    id: 'sidebar',
    title: '📚 Your Learning Path',
    body: 'The left panel lists all lessons grouped by topic. Work through them top-to-bottom — each one unlocks the next.',
    target: '.sidebar',
    position: 'right',
  },
  {
    id: 'xp',
    title: '⚡ Earn XP',
    body: 'Every lesson you complete earns XP points. Watch this bar fill up as you level up your Python skills!',
    target: '.xp-bar-wrap',
    position: 'right',
  },
  {
    id: 'instructions',
    title: '📖 Read the Challenge',
    body: "Each lesson starts with a short task description here. Read it carefully — it tells you exactly what to write. The blue bar shows the Python concept you're learning.",
    target: '.header-panel',
    position: 'bottom',
  },
  {
    id: 'editor',
    title: '✏️ Write Your Code Here',
    body: "This is the code editor. Click inside and start typing Python! The grey lines that start with # are comments — they're just hints and Python ignores them.",
    target: '.editor-container',
    position: 'right',
  },
  {
    id: 'hint',
    title: '💡 Stuck? Use a Hint',
    body: 'If you get confused, click the Hint button. It shows you the code pattern you need without giving away the full answer.',
    target: '.panel-actions',
    position: 'bottom',
  },
  {
    id: 'run',
    title: '▶️ Run Your Code',
    body: "When you're ready, press the green Run button (or Cmd+Enter on Mac / Ctrl+Enter on Windows). Python will execute your code instantly!",
    target: '.run-btn',
    position: 'bottom',
  },
  {
    id: 'console',
    title: '🖥️ See the Output',
    body: "Your code's output appears here. If it matches the expected output shown at the bottom, you'll complete the level and earn XP!",
    target: '.console-container',
    position: 'left',
  },
  {
    id: 'done',
    title: "🚀 You're all set!",
    body: "That's the whole app! Start with Level 1 — Hello, World! — and work your way up. Good luck, future Pythonista!",
    target: null,
    position: 'center',
  },
];

function getTargetRect(selector) {
  if (!selector) return null;
  const el = document.querySelector(selector);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}

function TooltipBox({ step, rect, onNext, onSkip, stepIndex, total }) {
  const isCenter = step.position === 'center';
  const isLast   = stepIndex === total - 1;

  // Compute tooltip position based on target rect + desired side
  let style = {};
  const PAD = 18; // gap between highlight box and tooltip

  if (!isCenter && rect) {
    switch (step.position) {
      case 'right':
        style = { top: rect.top, left: rect.left + rect.width + PAD };
        break;
      case 'left':
        style = { top: rect.top, right: window.innerWidth - rect.left + PAD, left: 'auto' };
        break;
      case 'bottom':
        style = { top: rect.top + rect.height + PAD, left: rect.left };
        break;
      case 'top':
        style = { bottom: window.innerHeight - rect.top + PAD, left: rect.left };
        break;
      default:
        style = { top: rect.top, left: rect.left + rect.width + PAD };
    }
  }

  return (
    <motion.div
      className={`tut-tooltip ${isCenter ? 'tut-center' : ''}`}
      style={isCenter ? {} : style}
      initial={{ opacity: 0, scale: 0.88, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 8 }}
      transition={{ duration: 0.22 }}
    >
      <div className="tut-step-counter">
        {STEPS.filter(s => s.target !== null || s.position === 'center').map((_, i) => (
          <div
            key={i}
            className={`tut-dot ${i === stepIndex ? 'active' : i < stepIndex ? 'done' : ''}`}
          />
        ))}
      </div>

      <h3 className="tut-title">{step.title}</h3>
      <p className="tut-body">{step.body}</p>

      <div className="tut-actions">
        {!isLast && (
          <button className="tut-skip" onClick={onSkip}>
            Skip tour
          </button>
        )}
        <button className="tut-next btn btn-primary" onClick={onNext}>
          {isLast ? '🎉 Let\'s go!' : 'Next'} <ChevronRight size={15} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Tutorial({ onDone }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [rect, setRect]           = useState(null);

  const step = STEPS[stepIndex];

  // Measure target element whenever step changes
  useEffect(() => {
    if (!step.target) { setRect(null); return; }

    // Small delay so React has painted the layout
    const t = setTimeout(() => {
      setRect(getTargetRect(step.target));
    }, 60);
    return () => clearTimeout(t);
  }, [stepIndex]);

  const finish = () => {
    localStorage.setItem(TUTORIAL_KEY, '1');
    onDone();
  };

  const next = () => {
    if (stepIndex < STEPS.length - 1) setStepIndex(i => i + 1);
    else finish();
  };

  const isCenter = step.position === 'center' || !step.target;

  return (
    <div className="tut-overlay">
      {/* Dark backdrop with a cutout for the highlighted element */}
      {!isCenter && rect && (
        <>
          {/* Top */}
          <div className="tut-shade" style={{ top: 0, left: 0, right: 0, height: rect.top }} />
          {/* Bottom */}
          <div className="tut-shade" style={{ top: rect.top + rect.height, left: 0, right: 0, bottom: 0 }} />
          {/* Left */}
          <div className="tut-shade" style={{ top: rect.top, left: 0, width: rect.left, height: rect.height }} />
          {/* Right */}
          <div className="tut-shade" style={{ top: rect.top, left: rect.left + rect.width, right: 0, height: rect.height }} />

          {/* Highlight border */}
          <div
            className="tut-highlight"
            style={{ top: rect.top - 4, left: rect.left - 4, width: rect.width + 8, height: rect.height + 8 }}
          />
        </>
      )}

      {/* Full shade for center steps */}
      {isCenter && <div className="tut-shade tut-full-shade" />}

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        <TooltipBox
          key={stepIndex}
          step={step}
          rect={rect}
          onNext={next}
          onSkip={finish}
          stepIndex={stepIndex}
          total={STEPS.length}
        />
      </AnimatePresence>
    </div>
  );
}

// Helper: should we show the tutorial?
export function shouldShowTutorial() {
  return !localStorage.getItem(TUTORIAL_KEY);
}
