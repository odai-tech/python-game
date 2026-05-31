import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import {
  Play, CheckCircle2, Terminal, BookOpen, Trophy, RotateCcw,
  Lightbulb, ChevronRight, ChevronDown, Star, Zap, Lock,
  Code2, X, AlertCircle, Info, Library, Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { levels, chapters } from './levels';
import { gradeAnswer, diffLines } from './grader';
import Tutorial, { shouldShowTutorial } from './Tutorial';
import AIAssistant from './AIAssistant';
import FeedbackOverlay from './FeedbackOverlay';
// Lazy-load Three.js background — heavy lib, load after paint
const DottedSurface = lazy(() =>
  import('./components/ui/dotted-surface').then(m => ({ default: m.DottedSurface }))
);
import './components/ui/dotted-surface.css';
// Lazy-load the Reference page — keeps initial bundle small
const ReferencePage = lazy(() => import('./ReferencePage'));
// Lazy-load the Beginner page
const BeginnerPage = lazy(() => import('./BeginnerPage'));
import './BeginnerPage.css';
// Lazy-load the Math page
const MathPage = lazy(() => import('./MathPage'));
import './MathPage.css';
import Dashboard from './components/Dashboard';
import './App.css';

// ─── XP / Progress helpers ───────────────────────────────────────────────────
const STORAGE_KEY = 'pyquest_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function totalXP(progress) {
  return Object.values(progress).reduce((s, v) => s + (v.xp || 0), 0);
}

// ─── XP floating pop ─────────────────────────────────────────────────────────
function XPPop({ xp, onDone }) {
  return (
    <motion.div
      className="xp-pop"
      initial={{ opacity: 1, y: 0, scale: 0.8 }}
      animate={{ opacity: 0, y: -60, scale: 1.2 }}
      transition={{ duration: 1.2 }}
      onAnimationComplete={onDone}
    >
      +{xp} XP
    </motion.div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [pyodide, setPyodide]               = useState(null);
  const [pyodideStatus, setPyodideStatus]   = useState('loading');
  const [currentLevelId, setCurrentLevelId] = useState(1);
  const [code, setCode]                     = useState('');
  const [output, setOutput]                 = useState('');
  const [isRunning, setIsRunning]           = useState(false);
  const [isSuccess, setIsSuccess]           = useState(false);
  const [isError, setIsError]               = useState(false);
  const [showHint, setShowHint]             = useState(false);
  const [progress, setProgress]             = useState(loadProgress);
  const [xpPop, setXpPop]                   = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [showTutorial, setShowTutorial]     = useState(shouldShowTutorial);
  // currentError string passed to AI (separate from display output)
  const [currentError, setCurrentError]     = useState(null);
  // Feedback overlay state
  const [feedback, setFeedback]             = useState(null); // null | { type:'success'|'wrong', xp }
  const [attemptCount, setAttemptCount]     = useState(0);
  const [showReference, setShowReference]   = useState(false);
  const [showBeginner, setShowBeginner]     = useState(false);
  const [showMath, setShowMath]             = useState(false);
  const [currentView, setCurrentView]       = useState(() => {
    try {
      return localStorage.getItem('pyquest_current_view') || 'dashboard';
    } catch {
      return 'dashboard';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pyquest_current_view', currentView);
    } catch {}
  }, [currentView]);

  const handleEarnBonusXP = (bonus) => {
    setXpPop(bonus);
    setProgress(prev => {
      const next = {
        ...prev,
        bonus: {
          xp: (prev.bonus?.xp || 0) + bonus
        }
      };
      saveProgress(next);
      return next;
    });
  };

  const consoleRef  = useRef(null);
  const editorRef   = useRef(null);   // Monaco editor instance
  const decorations = useRef([]);     // active Monaco decoration IDs

  const currentLevel = levels.find(l => l.id === currentLevelId);
  const xp    = totalXP(progress);
  const maxXP = levels.reduce((s, l) => s + l.xp, 0);
  const xpPct = Math.round((xp / maxXP) * 100);
  const diffColor = { Beginner: '#10b981', Intermediate: '#f59e0b', Advanced: '#ef4444' };

  // ── Monaco mount callback ─────────────────────────────────────────────────
  const handleEditorMount = (editor) => { editorRef.current = editor; };

  // ── Monaco beforeMount — define transparent dark theme ───────────────────
  const handleEditorBeforeMount = (monaco) => {
    monaco.editor.defineTheme('pyquest-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background':           '#00000000', // fully transparent
        'editor.lineHighlightBackground': '#ffffff08',
        'editorLineNumber.foreground': '#ffffff28',
        'editorLineNumber.activeForeground': '#ffffff55',
        'editorGutter.background':     '#00000000',
        'editorWidget.background':     '#0d0d0d',
        'editorSuggestWidget.background': '#0d0d0d',
        'editorSuggestWidget.border':  '#ffffff14',
        'editor.selectionBackground':  '#ffffff18',
        'editor.inactiveSelectionBackground': '#ffffff0d',
        'scrollbar.shadow':            '#00000000',
        'scrollbarSlider.background':  '#ffffff14',
        'scrollbarSlider.hoverBackground': '#ffffff22',
      },
    });
  };

  // ── Apply / clear red-line decorations in Monaco ──────────────────────────
  const applyDecorations = useCallback((highlights) => {
    const editor = editorRef.current;
    if (!editor) return;

    // Clear previous decorations
    decorations.current = editor.deltaDecorations(decorations.current, []);

    if (!highlights || highlights.length === 0) return;

    const newDecos = highlights.map(h => ({
      range: {
        startLineNumber: h.line,
        endLineNumber:   h.line,
        startColumn:     1,
        endColumn:       1000,
      },
      options: {
        isWholeLine:       true,
        className:         'monaco-error-line',
        glyphMarginClassName: 'monaco-error-glyph',
        hoverMessage:      { value: `⚠️ **Line ${h.line}:** ${h.reason}\n\n✅ Fix: \`${h.fix || 'see Pylo'}\`` },
        overviewRuler:     { color: '#ef4444', position: 1 },
        minimap:           { color: '#ef4444', position: 1 },
      },
    }));

    decorations.current = editor.deltaDecorations([], newDecos);

    // Scroll to first bad line
    editor.revealLineInCenter(highlights[0].line);
  }, []);

  // ── Load Pyodide ──────────────────────────────────────────────────────────
  useEffect(() => {
    async function init() {
      try {
        const py = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        });
        setPyodide(py);
        setPyodideStatus('ready');
      } catch (e) {
        console.error(e);
        setPyodideStatus('error');
      }
    }
    init();
  }, []);

  // ── Reset state when level changes ────────────────────────────────────────
  useEffect(() => {
    if (!currentLevel) return;
    const saved = progress[currentLevelId]?.savedCode;
    setCode(saved || currentLevel.initialCode);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);
    setShowHint(false);
    setCurrentError(null);
    setFeedback(null);
    setAttemptCount(0);
    setExpandedChapter(currentLevel.chapter);
    applyDecorations([]);
  }, [currentLevelId]); // eslint-disable-line

  // ── Auto-scroll console ───────────────────────────────────────────────────
  useEffect(() => {
    if (consoleRef.current)
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  }, [output]);

  // ── Persist draft code ────────────────────────────────────────────────────
  const handleCodeChange = useCallback((val) => {
    setCode(val ?? '');
    setProgress(prev => {
      const next = { ...prev, [currentLevelId]: { ...prev[currentLevelId], savedCode: val } };
      saveProgress(next);
      return next;
    });
  }, [currentLevelId]);

  // ── Run code ──────────────────────────────────────────────────────────────
  const handleRunCode = async () => {
    if (!pyodide) return;
    setIsRunning(true);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);
    setCurrentError(null);
    applyDecorations([]);

    try {
      pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
`);
      await pyodide.runPythonAsync(code);
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const clean  = stdout.trimEnd();
      setOutput(clean);

      const { grade, xpMultiplier, reason } = gradeAnswer(clean, currentLevel.expectedOutput);
      const lineDiff = diffLines(clean, currentLevel.expectedOutput);

      if (grade === 'perfect' || grade === 'close') {
        setIsSuccess(true);
        setAttemptCount(0);
        let earned = 0;
        if (!progress[currentLevelId]?.completed) {
          earned = Math.round(currentLevel.xp * xpMultiplier);
          setXpPop(earned);
          setProgress(prev => {
            const next = { ...prev, [currentLevelId]: { ...prev[currentLevelId], completed: true, xp: earned } };
            saveProgress(next);
            return next;
          });
        }
        setFeedback({ type: 'success', grade, xp: earned || Math.round(currentLevel.xp * xpMultiplier), reason, lineDiff });
      } else {
        setAttemptCount(n => n + 1);
        setFeedback({ type: 'wrong', grade, reason, lineDiff });
      }
    } catch (err) {
      const friendly = friendlyError(err.message);
      setOutput(friendly);
      setIsError(true);
      setCurrentError(friendly);   // ← triggers AI auto-analysis
      setAttemptCount(n => n + 1);
      setFeedback({ type: 'wrong' });
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(currentLevel.initialCode);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);
    setCurrentError(null);
    setFeedback(null);
    applyDecorations([]);
    setProgress(prev => {
      const next = { ...prev, [currentLevelId]: { ...prev[currentLevelId], savedCode: null } };
      saveProgress(next);
      return next;
    });
  };

  const nextLevel = () => {
    const next = levels.find(l => l.id > currentLevelId);
    if (next) setCurrentLevelId(next.id);
  };

  // ── Keyboard shortcut Cmd/Ctrl+Enter ──────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleRunCode();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [pyodide, code, currentLevel]); // eslint-disable-line

  // ── Sidebar grouping ──────────────────────────────────────────────────────
  const groupedLevels = chapters.map(ch => ({
    ...ch,
    levels: levels.filter(l => l.chapter === ch.name)
  }));

  // 🔓 TEMP: all levels unlocked for review — re-enable sequential lock before launch
  const levelUnlocked = (_id) => true;

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="app-container">

      {/* ── Animated dot-wave background (lazy — loads after first paint) ─ */}
      <Suspense fallback={null}>
        <DottedSurface />
      </Suspense>

      <AnimatePresence mode="wait">
        {currentView === 'dashboard' ? (
          <Dashboard
            key="dashboard"
            xp={xp}
            progress={progress}
            levels={levels}
            chapters={chapters}
            onStartLevel={(levelId) => {
              setCurrentLevelId(levelId);
              setCurrentView('arena');
            }}
            onViewReference={() => setShowReference(true)}
            onViewBeginner={() => setShowBeginner(true)}
            onViewMath={() => setShowMath(true)}
            onEarnBonusXP={handleEarnBonusXP}
          />
        ) : (
          <motion.div
            key="arena"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', width: '100%', height: '100%', gap: '16px', minWidth: 0 }}
          >
            {/* ── Sidebar ───────────────────────────────────────────────────── */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="sidebar glass-panel"
            >
              <div
                className="sidebar-logo"
                onClick={() => setCurrentView('dashboard')}
                style={{ cursor: 'pointer' }}
                title="Go back to Quest Map"
              >
                <div className="logo-icon-wrap"><Compass size={22} style={{ color: 'var(--accent-warn, #ffd60a)' }} /></div>
                <div>
                  <h2 className="logo-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    PyQuest <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>Map</span>
                  </h2>
                  <p className="logo-sub">Return to learning hub</p>
                </div>
              </div>

              <div className="xp-bar-wrap">
                <div className="xp-bar-labels">
                  <span className="xp-label"><Zap size={12} /> {xp} XP</span>
                  <span className="xp-pct">{xpPct}%</span>
                </div>
                <div className="xp-bar-track">
                  <motion.div
                    className="xp-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${xpPct}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Reference button */}
              <button
                className="ref-sidebar-btn"
                onClick={() => setShowReference(true)}
              >
                <Library size={15} />
                <span>Python Reference</span>
                <span className="ref-sidebar-badge">📖</span>
              </button>

              <nav className="levels-nav">
                {groupedLevels.map(ch => {
                  const chDone = ch.levels.filter(l => progress[l.id]?.completed).length;
                  const isOpen = expandedChapter === ch.name;
                  return (
                    <div key={ch.name} className="chapter-group">
                      <button
                        className={`chapter-header ${isOpen ? 'open' : ''}`}
                        style={{ '--ch-color': ch.color }}
                        onClick={() => setExpandedChapter(isOpen ? null : ch.name)}
                      >
                        <span className="ch-emoji">{ch.emoji}</span>
                        <span className="ch-name">{ch.name}</span>
                        <span className="ch-count">{chDone}/{ch.levels.length}</span>
                        <ChevronDown size={14} className={`ch-arrow ${isOpen ? 'rotated' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {ch.levels.map(level => {
                              const done   = !!progress[level.id]?.completed;
                              const active = level.id === currentLevelId;
                              const locked = !levelUnlocked(level.id);
                              return (
                                <button
                                  key={level.id}
                                  className={`level-item ${active ? 'active' : ''} ${done ? 'done' : ''} ${locked ? 'locked' : ''}`}
                                  onClick={() => !locked && setCurrentLevelId(level.id)}
                                  style={{ '--ch-color': ch.color }}
                                >
                                  <div className="level-dot">
                                    {done   ? <CheckCircle2 size={14} /> :
                                     locked ? <Lock size={12} /> :
                                              <BookOpen size={14} />}
                                  </div>
                                  <div className="level-info">
                                    <span className="level-title-sm">{level.title}</span>
                                    <span className="level-xp"><Star size={10} /> {level.xp} XP</span>
                                  </div>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </motion.aside>

            {/* ── Main content ──────────────────────────────────────────────── */}
            <main className="main-content">

              {/* Header / instructions */}
              <motion.header
                key={currentLevelId}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="header-panel glass-panel"
              >
                <div className="header-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      className="map-nav-btn"
                      onClick={() => setCurrentView('dashboard')}
                      title="Back to Quest Map Dashboard"
                    >
                      <Compass size={13} />
                      <span>Map</span>
                    </button>
                    <div className="header-badges">
                      <span className="diff-badge" style={{ color: diffColor[currentLevel.difficulty], borderColor: diffColor[currentLevel.difficulty] }}>
                        {currentLevel.difficulty}
                      </span>
                      <span className="ch-badge">{currentLevel.chapter}</span>
                      <span className="level-num-badge">Level {currentLevel.id} / {levels.length}</span>
                    </div>
                  </div>
                  <div className="header-xp"><Star size={14} /> {currentLevel.xp} XP</div>
                </div>
                <h1 className="level-title-large">{currentLevel.title}</h1>
                <p className="level-desc">{formatDescription(currentLevel.description)}</p>
                <div className="concept-pill">
                  <Info size={13} />
                  <span>{currentLevel.concept}</span>
                </div>
              </motion.header>

              {/* Workspace */}
              <div className="workspace">

                {/* Editor */}
                <motion.div
                  key={`editor-${currentLevelId}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className="editor-container glass-panel"
                >
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <Code2 size={14} />
                      <span>main.py</span>
                      {isError && <span className="error-pill">⚠ error — see Pylo</span>}
                    </div>
                    <div className="panel-actions">
                      <button className="btn btn-ghost btn-sm" onClick={() => setShowHint(h => !h)}>
                        <Lightbulb size={14} /> Hint
                      </button>
                      <button className="btn btn-ghost btn-sm" onClick={handleReset}>
                        <RotateCcw size={14} /> Reset
                      </button>
                      <button
                        className="btn btn-primary run-btn"
                        onClick={handleRunCode}
                        disabled={pyodideStatus !== 'ready' || isRunning}
                      >
                        {isRunning ? <span className="spinner" /> : <Play size={14} fill="currentColor" />}
                        Run <kbd>⌘↵</kbd>
                      </button>
                    </div>
                  </div>

                  {/* Hint drawer */}
                  <AnimatePresence>
                    {showHint && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="hint-drawer"
                      >
                        <div className="hint-content">
                          <Lightbulb size={15} className="hint-icon" />
                          <pre className="hint-code">{currentLevel.hint}</pre>
                          <button className="hint-close" onClick={() => setShowHint(false)}>
                            <X size={13} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="editor-wrapper">
                    <Editor
                      height="100%"
                      defaultLanguage="python"
                      theme="pyquest-dark"
                      value={code}
                      onChange={handleCodeChange}
                      beforeMount={handleEditorBeforeMount}
                      onMount={handleEditorMount}
                      options={{
                        minimap: { enabled: false },
                        fontSize: 15,
                        fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
                        fontLigatures: true,
                        padding: { top: 16, bottom: 16 },
                        scrollBeyondLastLine: false,
                        lineNumbersMinChars: 3,
                        renderLineHighlight: 'line',
                        cursorBlinking: 'smooth',
                        smoothScrolling: true,
                        glyphMargin: true,
                        tabSize: 4,
                        insertSpaces: true,
                        wordWrap: 'on',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Console */}
                <motion.div
                  key={`console-${currentLevelId}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="console-container glass-panel"
                >
                  <div className="panel-header">
                    <div className="panel-title-row">
                      <Terminal size={14} />
                      <span>Console</span>
                    </div>
                    {output && (
                      <button className="btn btn-ghost btn-sm" onClick={() => { setOutput(''); setCurrentError(null); applyDecorations([]); }}>
                        <X size={12} /> Clear
                      </button>
                    )}
                  </div>

                  <div className="console-output" ref={consoleRef}>
                    {pyodideStatus === 'loading' && (
                      <div className="console-loading">
                        <span className="spinner-sm" /> Loading Python environment…
                      </div>
                    )}
                    {pyodideStatus === 'error' && (
                      <div className="console-error-msg">
                        <AlertCircle size={16} />
                        Failed to load Python. Check your internet connection and refresh.
                      </div>
                    )}
                    {!output && pyodideStatus === 'ready' && (
                      <div className="console-placeholder">
                        Press <kbd>Run</kbd> to execute your code…
                      </div>
                    )}
                    {output && (
                      <pre className={`console-pre ${isSuccess ? 'success' : isError ? 'error' : ''}`}>
                        {output}
                      </pre>
                    )}
                  </div>

                  <div className="expected-output-section">
                    <span className="expected-label">Expected output:</span>
                    <code className="expected-code">{currentLevel.expectedOutput}</code>
                  </div>

                  {/* Success banner */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 24 }}
                        className="success-banner"
                      >
                        <div className="success-left">
                          <Trophy size={28} className="trophy" />
                          <div>
                            <p className="success-title">Level Complete!</p>
                            <p className="success-msg">{currentLevel.successMessage}</p>
                          </div>
                        </div>
                        {currentLevelId < levels.length && (
                          <button className="btn btn-primary" onClick={nextLevel}>
                            Next <ChevronRight size={15} />
                          </button>
                        )}
                        {currentLevelId === levels.length && (
                          <span className="final-badge">🏆 All done!</span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── XP pop ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {xpPop && <XPPop xp={xpPop} onDone={() => setXpPop(null)} />}
      </AnimatePresence>

      {/* ── Tutorial overlay ──────────────────────────────────────────── */}
      <AnimatePresence>
        {showTutorial && <Tutorial onDone={() => setShowTutorial(false)} />}
      </AnimatePresence>

      {/* ── AI Assistant ──────────────────────────────────────────────── */}
      <AIAssistant
        currentCode={code}
        currentError={currentError}
        currentLevel={currentLevel}
        isSuccess={isSuccess}
        onHighlightsReady={applyDecorations}
      />

      {/* ── Feedback overlay (success / wrong answer) ─────────────────── */}
      <FeedbackOverlay
        visible={!!feedback}
        type={feedback?.type}
        xp={feedback?.xp ?? currentLevel.xp}
        levelHint={currentLevel.hint}
        attemptCount={attemptCount}
        onNext={currentLevelId < levels.length ? nextLevel : null}
        onRetry={() => setFeedback(null)}
        onShowHint={() => setShowHint(true)}
        onDismiss={() => setFeedback(null)}
      />

      {/* ── Reference page (full-screen overlay, lazy-loaded) ────────── */}
      <AnimatePresence>
        {showReference && (
          <motion.div
            className="reference-overlay"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <Suspense fallback={
              <div className="ref-loading">
                <span className="spinner-sm" /> Loading Reference…
              </div>
            }>
              <ReferencePage onBack={() => setShowReference(false)} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Beginner page (full-screen overlay, lazy-loaded) ─────────── */}
      <AnimatePresence>
        {showBeginner && (
          <motion.div
            className="beginner-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Suspense fallback={
              <div className="ref-loading">
                <span className="spinner-sm" /> Loading Beginner Course…
              </div>
            }>
              <BeginnerPage
                onBack={() => setShowBeginner(false)}
                onEarnXP={handleEarnBonusXP}
              />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Math page (full-screen overlay, lazy-loaded) ─────────────── */}
      <AnimatePresence>
        {showMath && (
          <motion.div
            className="beginner-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Suspense fallback={
              <div className="ref-loading">
                <span className="spinner-sm" /> Loading Math Practice…
              </div>
            }>
              <MathPage
                onBack={() => setShowMath(false)}
                onEarnXP={handleEarnBonusXP}
              />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDescription(text) {
  if (!text) return null;
  return text.split('\n').map((line, i, arr) => {
    const parts = line.split(/(`[^`]+`)/g);
    return (
      <React.Fragment key={i}>
        {parts.map((part, j) =>
          part.startsWith('`') && part.endsWith('`')
            ? <code key={j} className="inline-code">{part.slice(1, -1)}</code>
            : part
        )}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

function friendlyError(msg) {
  if (!msg) return 'Unknown error.';
  const lines = msg.split('\n');
  return lines.filter(l => l.trim()).slice(-3).join('\n') || msg;
}
