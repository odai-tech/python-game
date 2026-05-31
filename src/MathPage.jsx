import React, { useState, useEffect, useCallback } from 'react';
import {
  Calculator, ChevronLeft, ChevronRight, CheckCircle2,
  Trophy, Star, Zap, RotateCcw, Lightbulb, X, Home,
  Lock, Sparkles, ArrowRight, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mathLevels, mathChapters } from './mathLevels';
import './MathPage.css';

const MATH_PROGRESS_KEY = 'pyquest_math_progress';

function loadMathProgress() {
  try { return JSON.parse(localStorage.getItem(MATH_PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function saveMathProgress(p) {
  localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(p));
}

export default function MathPage({ onBack, onEarnXP }) {
  const [currentLevelId, setCurrentLevelId] = useState(mathLevels[0]?.id || 101);
  const [progress, setProgress] = useState(loadMathProgress);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [xpPop, setXpPop] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedExam, setSelectedExam] = useState(1);

  const currentLevel = mathLevels.find(l => l.id === currentLevelId);
  const currentChapter = mathChapters.find(c => c.id === currentLevel?.chapterId);

  const totalXP = Object.values(progress).reduce((sum, p) => sum + (p.xp || 0), 0);
  const completedCount = Object.values(progress).filter(p => p.completed).length;

  const examLevels = mathLevels.filter(l => l.exam === selectedExam);

  useEffect(() => {
    if (!currentLevel) return;
    const saved = progress[currentLevelId]?.savedAnswers;
    setAnswers(saved || {});
    setShowResult(null);
    setShowHint(false);
  }, [currentLevelId]);

  const handleAnswerChange = useCallback((variable, value) => {
    const newAnswers = { ...answers, [variable]: value };
    setAnswers(newAnswers);
    setProgress(prev => {
      const next = { ...prev, [currentLevelId]: { ...prev[currentLevelId], savedAnswers: newAnswers } };
      saveMathProgress(next);
      return next;
    });
  }, [currentLevelId, answers]);

  const checkAnswers = () => {
    if (!currentLevel) return;

    const correct = currentLevel.variables.every(v => {
      const userVal = parseInt(answers[v], 10);
      return userVal === currentLevel.answer[v];
    });

    if (correct) {
      let earned = 0;
      if (!progress[currentLevelId]?.completed) {
        earned = currentLevel.xp;
        setXpPop(earned);
        onEarnXP?.(earned);
        setProgress(prev => {
          const next = {
            ...prev,
            [currentLevelId]: {
              ...prev[currentLevelId],
              completed: true,
              xp: earned
            }
          };
          saveMathProgress(next);
          return next;
        });
      }
      setShowResult({ type: 'success', xp: earned });
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    } else {
      setShowResult({ type: 'wrong' });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(null);
    setShowHint(false);
    setProgress(prev => {
      const next = { ...prev, [currentLevelId]: { ...prev[currentLevelId], savedAnswers: null } };
      saveMathProgress(next);
      return next;
    });
  };

  const nextLevel = () => {
    const currentIdx = examLevels.findIndex(l => l.id === currentLevelId);
    if (currentIdx < examLevels.length - 1) {
      setCurrentLevelId(examLevels[currentIdx + 1].id);
    }
  };

  const prevLevel = () => {
    const currentIdx = examLevels.findIndex(l => l.id === currentLevelId);
    if (currentIdx > 0) {
      setCurrentLevelId(examLevels[currentIdx - 1].id);
    }
  };

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'easy': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#888';
    }
  };

  const isComplete = progress[currentLevelId]?.completed;

  return (
    <motion.div
      className="math-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* XP Pop Animation */}
      <AnimatePresence>
        {xpPop && (
          <motion.div
            className="math-xp-pop"
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -60, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            onAnimationComplete={() => setXpPop(null)}
          >
            +{xpPop} XP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="math-celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Sparkles size={48} />
            <span>Correct!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="math-header glass-panel">
        <button className="math-back-btn" onClick={onBack}>
          <Home size={18} />
          <span>Back</span>
        </button>
        <div className="math-title">
          <Calculator size={24} />
          <h1>TestAS Math Equations</h1>
        </div>
        <div className="math-stats">
          <span className="math-stat">
            <Trophy size={16} />
            {completedCount}/{mathLevels.length}
          </span>
          <span className="math-stat">
            <Zap size={16} />
            {totalXP} XP
          </span>
        </div>
      </header>

      <div className="math-content">
        {/* Sidebar */}
        <aside className="math-sidebar glass-panel">
          {/* Exam Selector */}
          <div className="math-exam-tabs">
            {[1, 2, 3].map(exam => (
              <button
                key={exam}
                className={`math-exam-tab ${selectedExam === exam ? 'active' : ''}`}
                onClick={() => {
                  setSelectedExam(exam);
                  const firstLevel = mathLevels.find(l => l.exam === exam);
                  if (firstLevel) setCurrentLevelId(firstLevel.id);
                }}
              >
                Exam {exam}
              </button>
            ))}
          </div>

          {/* Question List */}
          <div className="math-level-list">
            {examLevels.map(level => {
              const isDone = progress[level.id]?.completed;
              const isCurrent = level.id === currentLevelId;

              return (
                <button
                  key={level.id}
                  className={`math-level-btn ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}`}
                  onClick={() => setCurrentLevelId(level.id)}
                >
                  <span
                    className="math-level-dot"
                    style={{ backgroundColor: getDifficultyColor(level.difficulty) }}
                  />
                  <span className="math-level-num">{level.number}</span>
                  {isDone && <CheckCircle2 size={14} className="math-level-check" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="math-main">
          {currentLevel && (
            <div className="math-question glass-panel">
              {/* Question Header */}
              <div className="math-q-header">
                <div className="math-q-info">
                  <span className="math-q-number">Question {currentLevel.number}</span>
                  <span
                    className="math-q-difficulty"
                    style={{
                      backgroundColor: getDifficultyColor(currentLevel.difficulty) + '20',
                      color: getDifficultyColor(currentLevel.difficulty)
                    }}
                  >
                    {currentChapter?.icon} {currentLevel.difficulty}
                  </span>
                  {isComplete && (
                    <span className="math-q-complete">
                      <CheckCircle2 size={14} /> Completed
                    </span>
                  )}
                </div>
                <span className="math-q-xp">
                  <Star size={14} /> {currentLevel.xp} XP
                </span>
              </div>

              {/* Equations */}
              <div className="math-equations">
                <p className="math-eq-label">Solve for {currentLevel.variables.join(', ')}:</p>
                {currentLevel.equations.map((eq, i) => (
                  <div key={i} className="math-equation">
                    <span className="math-eq-num">{i + 1}.</span>
                    <span className="math-eq-text">{eq}</span>
                  </div>
                ))}
              </div>

              {/* Answer Inputs */}
              <div className="math-answers">
                <p className="math-ans-label">Your answers (integers 1-20):</p>
                <div className="math-inputs">
                  {currentLevel.variables.map(v => (
                    <div key={v} className="math-input-group">
                      <label>{v} =</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={answers[v] || ''}
                        onChange={(e) => handleAnswerChange(v, e.target.value)}
                        className={showResult?.type === 'wrong' && answers[v] != currentLevel.answer[v] ? 'wrong' : ''}
                        disabled={isComplete}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    className={`math-result ${showResult.type}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {showResult.type === 'success' ? (
                      <>
                        <CheckCircle2 size={20} />
                        <span>Correct! {showResult.xp > 0 && `+${showResult.xp} XP`}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span>Not quite right. Try again!</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="math-actions">
                <button
                  className="math-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                  disabled={isComplete}
                >
                  <Lightbulb size={16} />
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
                <button className="math-reset-btn" onClick={handleReset}>
                  <RotateCcw size={16} />
                  Reset
                </button>
                {!isComplete ? (
                  <button
                    className="math-check-btn"
                    onClick={checkAnswers}
                    disabled={currentLevel.variables.some(v => !answers[v])}
                  >
                    <CheckCircle2 size={16} />
                    Check Answer
                  </button>
                ) : (
                  <button className="math-next-btn" onClick={nextLevel}>
                    Next Question
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              {/* Hint */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    className="math-hint"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Lightbulb size={16} />
                    <p>{currentLevel.hint}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="math-nav">
                <button
                  className="math-nav-btn"
                  onClick={prevLevel}
                  disabled={examLevels.findIndex(l => l.id === currentLevelId) === 0}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  className="math-nav-btn"
                  onClick={nextLevel}
                  disabled={examLevels.findIndex(l => l.id === currentLevelId) === examLevels.length - 1}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
}
