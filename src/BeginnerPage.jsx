import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  BookOpen, Play, ChevronLeft, ChevronRight, CheckCircle2,
  Trophy, Star, Zap, RotateCcw, Lightbulb, X, Home, Lock,
  GraduationCap, Sparkles, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { beginnerLessons, beginnerChapters } from './beginnerLessons';
import './BeginnerPage.css';

const BEGINNER_PROGRESS_KEY = 'pyquest_beginner_progress';

function loadBeginnerProgress() {
  try { return JSON.parse(localStorage.getItem(BEGINNER_PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function saveBeginnerProgress(p) {
  localStorage.setItem(BEGINNER_PROGRESS_KEY, JSON.stringify(p));
}

export default function BeginnerPage({ onBack, onEarnXP }) {
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [viewMode, setViewMode] = useState('book'); // 'book' or 'exercise'
  const [progress, setProgress] = useState(loadBeginnerProgress);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [pyodide, setPyodide] = useState(null);
  const [pyodideStatus, setPyodideStatus] = useState('loading');
  const [xpPop, setXpPop] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const editorRef = useRef(null);
  const currentLesson = beginnerLessons.find(l => l.id === currentLessonId);
  const currentChapter = beginnerChapters.find(c => c.id === currentLesson?.chapterId);

  const totalXP = Object.values(progress).reduce((sum, p) => sum + (p.xp || 0), 0);
  const completedCount = Object.values(progress).filter(p => p.completed).length;

  // Load Pyodide
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

  // Reset when lesson changes
  useEffect(() => {
    if (!currentLesson) return;
    const saved = progress[currentLessonId]?.savedCode;
    setCode(saved || currentLesson.initialCode);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);
    setShowHint(false);
    setViewMode('book');
  }, [currentLessonId]);

  const handleEditorMount = (editor) => { editorRef.current = editor; };

  const handleEditorBeforeMount = (monaco) => {
    monaco.editor.defineTheme('beginner-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0a0f1a',
        'editor.lineHighlightBackground': '#ffffff08',
        'editorLineNumber.foreground': '#ffffff28',
      },
    });
  };

  const handleCodeChange = useCallback((val) => {
    setCode(val ?? '');
    setProgress(prev => {
      const next = { ...prev, [currentLessonId]: { ...prev[currentLessonId], savedCode: val } };
      saveBeginnerProgress(next);
      return next;
    });
  }, [currentLessonId]);

  // Smart answer checker - normalizes and compares output
  const checkAnswer = (userOutput, expectedOutput) => {
    // Normalize both strings for comparison
    const normalize = (str) => {
      return str
        .trim()
        .replace(/\r\n/g, '\n')  // Normalize line endings
        .replace(/\s+$/gm, '')   // Remove trailing whitespace per line
        .replace(/^\s+/gm, '')   // Remove leading whitespace per line (for some cases)
    };

    const normalizedUser = normalize(userOutput);
    const normalizedExpected = normalize(expectedOutput);

    // Exact match after normalization
    if (normalizedUser === normalizedExpected) {
      return { correct: true, feedback: null };
    }

    // Case-insensitive match (for string outputs)
    if (normalizedUser.toLowerCase() === normalizedExpected.toLowerCase()) {
      return { correct: true, feedback: 'Perfect! (Note: Watch your capitalization next time)' };
    }

    // Check if the output contains the expected (partial credit for extra output)
    if (normalizedUser.includes(normalizedExpected)) {
      return { correct: true, feedback: 'Correct! You printed some extra content, but the answer is there.' };
    }

    // Check for common mistakes
    if (normalizedExpected.includes(normalizedUser) && normalizedUser.length > 0) {
      return { correct: false, feedback: `Almost! You're missing part of the output. Expected: "${expectedOutput}"` };
    }

    // Check for whitespace issues
    if (normalizedUser.replace(/\s/g, '') === normalizedExpected.replace(/\s/g, '')) {
      return { correct: true, feedback: 'Correct! (Minor whitespace difference)' };
    }

    return { correct: false, feedback: `Not quite. Expected: "${expectedOutput}" but got: "${userOutput}"` };
  };

  const handleRunCode = async () => {
    if (!pyodide) {
      setOutput('Python is still loading... Please wait a moment and try again.');
      return;
    }

    setIsRunning(true);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);

    try {
      // Reset stdout/stderr
      pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = sys.stdout
`);

      // Run the user's code
      await pyodide.runPythonAsync(code);

      // Get the output
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const userOutput = stdout.trimEnd();

      // Always show output
      setOutput(userOutput || '(No output produced)');

      // Check the answer
      const result = checkAnswer(userOutput, currentLesson.expectedOutput);

      if (result.correct) {
        setIsSuccess(true);

        // Show feedback if there's a note
        if (result.feedback) {
          setOutput(userOutput + '\n\n' + result.feedback);
        }

        // Award XP if not already completed
        if (!progress[currentLessonId]?.completed) {
          const earned = currentLesson.xp;
          setXpPop(earned);
          setShowCelebration(true);
          setProgress(prev => {
            const next = { ...prev, [currentLessonId]: { ...prev[currentLessonId], completed: true, xp: earned } };
            saveBeginnerProgress(next);
            return next;
          });
          if (onEarnXP) onEarnXP(earned);
          setTimeout(() => setShowCelebration(false), 2500);
        }
      } else {
        // Show helpful feedback for wrong answers
        setIsError(true);
        if (result.feedback) {
          setOutput(userOutput + '\n\n' + result.feedback);
        }
      }
    } catch (err) {
      // Handle Python errors with friendly messages
      const errorMsg = err.message || 'An error occurred';
      const lines = errorMsg.split('\n').filter(l => l.trim());

      // Extract the most useful error info
      let friendlyError = '';

      // Look for common error types
      if (errorMsg.includes('SyntaxError')) {
        friendlyError = 'Syntax Error: Check for typos, missing quotes, or parentheses.';
      } else if (errorMsg.includes('NameError')) {
        const match = errorMsg.match(/name '(\w+)' is not defined/);
        if (match) {
          friendlyError = `Name Error: "${match[1]}" is not defined. Did you spell it correctly?`;
        } else {
          friendlyError = 'Name Error: You\'re using a variable that doesn\'t exist.';
        }
      } else if (errorMsg.includes('TypeError')) {
        friendlyError = 'Type Error: You\'re mixing incompatible types (like string + number).';
      } else if (errorMsg.includes('IndentationError')) {
        friendlyError = 'Indentation Error: Check your spacing at the start of lines.';
      } else {
        friendlyError = lines.slice(-2).join('\n');
      }

      setOutput(friendlyError);
      setIsError(true);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(currentLesson.initialCode);
    setOutput('');
    setIsSuccess(false);
    setIsError(false);
  };

  const goToLesson = (id) => {
    if (isLessonUnlocked(id)) {
      setCurrentLessonId(id);
    }
  };

  const nextLesson = () => {
    const next = beginnerLessons.find(l => l.id > currentLessonId);
    if (next && isLessonUnlocked(next.id)) {
      setCurrentLessonId(next.id);
    }
  };

  const prevLesson = () => {
    const prev = beginnerLessons.findLast(l => l.id < currentLessonId);
    if (prev) setCurrentLessonId(prev.id);
  };

  const isLessonUnlocked = (id) => {
    if (id === 1) return true;
    const prevLesson = beginnerLessons.find(l => l.id === id - 1);
    return prevLesson ? !!progress[prevLesson.id]?.completed : true;
  };

  const isLessonCompleted = (id) => !!progress[id]?.completed;

  // Render markdown-like content
  const renderBookContent = (content) => {
    if (!content) return null;

    const lines = content.trim().split('\n');
    const elements = [];
    let i = 0;
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = '';

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeContent = [];
        } else {
          elements.push(
            <pre key={i} className="book-code-block">
              <code>{codeContent.join('\n')}</code>
            </pre>
          );
          inCodeBlock = false;
        }
        i++;
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        i++;
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(<h1 key={i} className="book-h1">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="book-h2">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="book-h3">{line.slice(4)}</h3>);
      }
      // Blockquotes
      else if (line.startsWith('> ')) {
        elements.push(<blockquote key={i} className="book-quote">{line.slice(2)}</blockquote>);
      }
      // List items
      else if (line.match(/^[\d]+\.\s/)) {
        elements.push(<p key={i} className="book-list-item numbered">{renderInlineCode(line)}</p>);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(<p key={i} className="book-list-item">{renderInlineCode(line.slice(2))}</p>);
      }
      // Tables (simple)
      else if (line.startsWith('|')) {
        // Skip table for simplicity, or render as code
        elements.push(<p key={i} className="book-table-row">{line}</p>);
      }
      // Empty lines
      else if (line.trim() === '') {
        elements.push(<div key={i} className="book-spacer" />);
      }
      // Regular paragraphs
      else {
        elements.push(<p key={i} className="book-paragraph">{renderInlineCode(line)}</p>);
      }

      i++;
    }

    return elements;
  };

  const renderInlineCode = (text) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={idx} className="book-inline-code">{part.slice(1, -1)}</code>;
      }
      // Bold
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((bp, bidx) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          return <strong key={`${idx}-${bidx}`}>{bp.slice(2, -2)}</strong>;
        }
        return bp;
      });
    });
  };

  return (
    <motion.div
      className="beginner-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Sidebar */}
      <aside className="beginner-sidebar">
        <div className="beginner-sidebar-header">
          <button className="beginner-back-btn" onClick={onBack}>
            <Home size={16} />
            <span>Back to Hub</span>
          </button>
          <div className="beginner-logo">
            <GraduationCap size={24} />
            <div>
              <h2>Zero to Hero</h2>
              <p>Python for Beginners</p>
            </div>
          </div>
        </div>

        <div className="beginner-stats">
          <div className="beginner-stat">
            <Zap size={14} />
            <span>{totalXP} XP</span>
          </div>
          <div className="beginner-stat">
            <CheckCircle2 size={14} />
            <span>{completedCount}/{beginnerLessons.length} Lessons</span>
          </div>
          <div className="beginner-progress-bar">
            <div
              className="beginner-progress-fill"
              style={{ width: `${(completedCount / beginnerLessons.length) * 100}%` }}
            />
          </div>
        </div>

        <nav className="beginner-nav">
          {beginnerChapters.map(chapter => {
            const chapterLessons = beginnerLessons.filter(l => l.chapterId === chapter.id);
            const chapterCompleted = chapterLessons.filter(l => isLessonCompleted(l.id)).length;

            return (
              <div key={chapter.id} className="beginner-chapter">
                <div className="beginner-chapter-header" style={{ '--ch-color': chapter.color }}>
                  <span className="beginner-chapter-emoji">{chapter.emoji}</span>
                  <div className="beginner-chapter-info">
                    <span className="beginner-chapter-name">{chapter.name}</span>
                    <span className="beginner-chapter-progress">{chapterCompleted}/{chapterLessons.length}</span>
                  </div>
                </div>
                <div className="beginner-lessons-list">
                  {chapterLessons.map(lesson => {
                    const unlocked = isLessonUnlocked(lesson.id);
                    const completed = isLessonCompleted(lesson.id);
                    const active = lesson.id === currentLessonId;

                    return (
                      <button
                        key={lesson.id}
                        className={`beginner-lesson-item ${active ? 'active' : ''} ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}`}
                        onClick={() => goToLesson(lesson.id)}
                        disabled={!unlocked}
                      >
                        <span className="beginner-lesson-icon">
                          {completed ? <CheckCircle2 size={14} /> : !unlocked ? <Lock size={12} /> : <BookOpen size={14} />}
                        </span>
                        <span className="beginner-lesson-title">{lesson.title}</span>
                        <span className="beginner-lesson-xp">+{lesson.xp}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="beginner-main">
        {/* Header */}
        <header className="beginner-header">
          <div className="beginner-header-left">
            <span className="beginner-chapter-badge" style={{ background: currentChapter?.color }}>
              {currentChapter?.emoji} {currentChapter?.name}
            </span>
            <h1 className="beginner-lesson-title-large">{currentLesson?.title}</h1>
          </div>
          <div className="beginner-header-right">
            <div className="beginner-view-toggle">
              <button
                className={`view-toggle-btn ${viewMode === 'book' ? 'active' : ''}`}
                onClick={() => setViewMode('book')}
              >
                <BookOpen size={14} />
                <span>Learn</span>
              </button>
              <button
                className={`view-toggle-btn ${viewMode === 'exercise' ? 'active' : ''}`}
                onClick={() => setViewMode('exercise')}
              >
                <Play size={14} />
                <span>Practice</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="beginner-content">
          <AnimatePresence mode="wait">
            {viewMode === 'book' ? (
              <motion.div
                key="book"
                className="beginner-book-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="book-content">
                  {renderBookContent(currentLesson?.bookContent)}
                </div>
                <div className="book-footer">
                  <button className="btn btn-primary btn-lg" onClick={() => setViewMode('exercise')}>
                    <span>Try It Yourself</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="exercise"
                className="beginner-exercise-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="exercise-panel">
                  <div className="exercise-instructions">
                    <div className="mission-header">
                      <span className="mission-label">MISSION</span>
                      <span className="mission-number">#{currentLessonId}</span>
                    </div>
                    <h3>{currentLesson?.exerciseTitle}</h3>
                    <p>{currentLesson?.exerciseDescription}</p>
                    <div className="exercise-expected">
                      <span className="expected-label">Expected output:</span>
                      <code className="expected-code">{currentLesson?.expectedOutput}</code>
                    </div>
                  </div>

                  <div className="exercise-editor-wrap">
                    <div className="exercise-toolbar">
                      <div className="toolbar-left">
                        <span className="file-name">main.py</span>
                      </div>
                      <div className="toolbar-right">
                        <button className="btn btn-ghost btn-sm" onClick={() => setShowHint(h => !h)}>
                          <Lightbulb size={14} />
                          <span>Hint</span>
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={handleReset}>
                          <RotateCcw size={14} />
                          <span>Reset</span>
                        </button>
                        <button
                          className="btn btn-primary run-btn"
                          onClick={handleRunCode}
                          disabled={pyodideStatus !== 'ready' || isRunning}
                        >
                          {isRunning ? <span className="spinner" /> : <Play size={14} fill="currentColor" />}
                          <span>Run</span>
                        </button>
                      </div>
                    </div>

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
                            <pre className="hint-code">{currentLesson?.hint}</pre>
                            <button className="hint-close" onClick={() => setShowHint(false)}>
                              <X size={13} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="editor-area">
                      <Editor
                        height="200px"
                        defaultLanguage="python"
                        theme="beginner-dark"
                        value={code}
                        onChange={handleCodeChange}
                        beforeMount={handleEditorBeforeMount}
                        onMount={handleEditorMount}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 15,
                          fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
                          padding: { top: 16, bottom: 16 },
                          scrollBeyondLastLine: false,
                          lineNumbers: 'on',
                          lineNumbersMinChars: 2,
                          tabSize: 4,
                          wordWrap: 'on',
                        }}
                      />
                    </div>

                    <div className={`console-output ${isSuccess ? 'success' : isError ? 'error' : ''}`}>
                      <div className="console-header">
                        <span>Output</span>
                        {pyodideStatus === 'loading' && <span className="python-status loading">Python loading...</span>}
                        {pyodideStatus === 'ready' && <span className="python-status ready">Python ready</span>}
                        {pyodideStatus === 'error' && <span className="python-status error">Python failed to load</span>}
                      </div>
                      <pre className="console-pre">
                        {pyodideStatus === 'loading' && '⏳ Python environment is loading. Please wait...'}
                        {pyodideStatus === 'error' && '❌ Failed to load Python. Please refresh the page.'}
                        {pyodideStatus === 'ready' && !output && !isRunning && '👆 Write your code above and click Run to see the output'}
                        {isRunning && '⚙️ Running your code...'}
                        {output}
                      </pre>
                    </div>
                  </div>

                  {/* Success Banner */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="success-banner"
                      >
                        <Trophy size={24} />
                        <div>
                          <p className="success-title">Excellent!</p>
                          <p className="success-msg">{currentLesson?.successMessage}</p>
                        </div>
                        {currentLessonId < beginnerLessons.length && (
                          <button className="btn btn-primary" onClick={nextLesson}>
                            Next Lesson <ChevronRight size={16} />
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <footer className="beginner-footer">
          <button
            className="nav-btn"
            onClick={prevLesson}
            disabled={currentLessonId === 1}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>
          <span className="lesson-counter">
            Lesson {currentLessonId} of {beginnerLessons.length}
          </span>
          <button
            className="nav-btn"
            onClick={nextLesson}
            disabled={currentLessonId === beginnerLessons.length || !isLessonUnlocked(currentLessonId + 1)}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </footer>
      </main>

      {/* XP Pop */}
      <AnimatePresence>
        {xpPop && (
          <motion.div
            className="xp-pop"
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -60, scale: 1.2 }}
            transition={{ duration: 1.2 }}
            onAnimationComplete={() => setXpPop(null)}
          >
            +{xpPop} XP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="celebration-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="celebration-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12 }}
            >
              <Sparkles size={48} />
              <h2>Lesson Complete!</h2>
              <p>+{currentLesson?.xp} XP earned</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
