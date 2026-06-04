import React, { useState, useEffect, useCallback } from 'react';
import {
  Calculator, ChevronLeft, ChevronRight, CheckCircle2,
  Trophy, Star, Zap, RotateCcw, Lightbulb, X, Home,
  Lock, Sparkles, ArrowRight, AlertCircle, BookOpen,
  Brain, Eye, Clock, ChevronDown, ChevronUp, HelpCircle,
  Target, Flame, GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mathLevels, mathChapters, mentalMathStrategies } from './mathLevels';
import './MathPage.css';

const MATH_PROGRESS_KEY = 'pyquest_math_progress';

function loadMathProgress() {
  try { return JSON.parse(localStorage.getItem(MATH_PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function saveMathProgress(p) {
  localStorage.setItem(MATH_PROGRESS_KEY, JSON.stringify(p));
}

// Strategy Guide Modal
function StrategyGuide({ onClose }) {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const strategy = mentalMathStrategies[activeStrategy];

  return (
    <motion.div
      className="strategy-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="strategy-modal glass-panel"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="strategy-header">
          <div className="strategy-header-left">
            <Brain size={24} />
            <div>
              <h2>Mental Math Mastery</h2>
              <p>Learn to solve ANY equation in under 30 seconds</p>
            </div>
          </div>
          <button className="strategy-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="strategy-content">
          {/* Strategy Tabs */}
          <div className="strategy-tabs">
            {mentalMathStrategies.map((s, i) => (
              <button
                key={s.id}
                className={`strategy-tab ${activeStrategy === i ? 'active' : ''}`}
                onClick={() => setActiveStrategy(i)}
              >
                <span className="strategy-tab-emoji">{s.emoji}</span>
                <span className="strategy-tab-title">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active Strategy Content */}
          <div className="strategy-detail">
            <div className="strategy-intro">
              <span className="strategy-emoji-large">{strategy.emoji}</span>
              <div>
                <h3>{strategy.title}</h3>
                <p className="strategy-short">{strategy.shortDesc}</p>
              </div>
            </div>

            <div className="strategy-steps">
              <h4><Target size={16} /> The Steps</h4>
              <ol>
                {strategy.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {strategy.example && (
              <div className="strategy-example">
                <h4><BookOpen size={16} /> Example</h4>
                <div className="example-equations">
                  {strategy.example.equations.map((eq, i) => (
                    <div key={i} className="example-eq">
                      <span className="eq-num">{i + 1}.</span>
                      <span className="eq-text">{eq}</span>
                    </div>
                  ))}
                </div>
                <div className="example-walkthrough">
                  {strategy.example.walkthrough.map((step, i) => (
                    <motion.div
                      key={i}
                      className="walkthrough-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="step-bullet">→</span>
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="strategy-trick">
              <Flame size={16} />
              <div>
                <strong>Pro Tip:</strong>
                <p>{strategy.mentalTrick}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="strategy-footer">
          <p>💡 Practice these strategies and you'll solve equations lightning fast!</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Step-by-step solution component
function SolutionWalkthrough({ solution, equations, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  if (!solution) return null;

  const steps = solution.steps || [];

  return (
    <motion.div
      className="solution-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="solution-header">
        <div className="solution-header-left">
          <GraduationCap size={20} />
          <h4>Step-by-Step Solution</h4>
        </div>
        <div className="solution-header-right">
          <span className="solution-time">
            <Clock size={14} />
            {solution.timeEstimate}
          </span>
          <button className="solution-close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="solution-equations">
        <span className="solution-label">The equations:</span>
        <div className="solution-eq-list">
          {equations.map((eq, i) => (
            <span key={i} className="solution-eq">{eq}</span>
          ))}
        </div>
      </div>

      <div className="solution-steps">
        {(showAll ? steps : steps.slice(0, currentStep + 1)).map((step, i) => (
          <motion.div
            key={i}
            className={`solution-step ${i === currentStep && !showAll ? 'current' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: showAll ? 0 : 0.1 }}
          >
            <div className="step-number">{i + 1}</div>
            <div className="step-content">
              <h5>{step.title}</h5>
              <p>{step.content}</p>
              {step.equation && (
                <div className="step-equation">
                  <code>{step.equation}</code>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && currentStep < steps.length - 1 && (
        <button
          className="solution-next-btn"
          onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
        >
          Show Next Step
          <ChevronRight size={16} />
        </button>
      )}

      {!showAll && currentStep === steps.length - 1 && (
        <div className="solution-final-check">
          <CheckCircle2 size={18} />
          <span>{solution.finalCheck}</span>
        </div>
      )}

      <div className="solution-actions">
        <button
          className="solution-show-all"
          onClick={() => {
            setShowAll(!showAll);
            if (!showAll) setCurrentStep(steps.length - 1);
          }}
        >
          {showAll ? 'Show Step-by-Step' : 'Show All Steps'}
        </button>
        {currentStep > 0 && !showAll && (
          <button
            className="solution-prev"
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
          >
            <ChevronLeft size={16} />
            Previous
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function MathPage({ onBack, onEarnXP }) {
  const [currentLevelId, setCurrentLevelId] = useState(mathLevels[0]?.id || 101);
  const [progress, setProgress] = useState(loadMathProgress);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showStrategyGuide, setShowStrategyGuide] = useState(false);
  const [xpPop, setXpPop] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedExam, setSelectedExam] = useState(1);
  const [attemptCount, setAttemptCount] = useState(0);

  const currentLevel = mathLevels.find(l => l.id === currentLevelId);
  const currentChapter = mathChapters.find(c => c.id === currentLevel?.chapterId);

  const totalXP = Object.values(progress).reduce((sum, p) => sum + (p.xp || 0), 0);
  const completedCount = Object.values(progress).filter(p => p.completed).length;

  const examLevels = mathLevels.filter(l => l.exam === selectedExam);
  const examNumbers = [...new Set(mathLevels.map(l => l.exam))].sort((a, b) => a - b);

  useEffect(() => {
    if (!currentLevel) return;
    const saved = progress[currentLevelId]?.savedAnswers;
    setAnswers(saved || {});
    setShowResult(null);
    setShowHint(false);
    setShowSolution(false);
    setAttemptCount(0);
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

    setAttemptCount(prev => prev + 1);

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
    setShowSolution(false);
    setAttemptCount(0);
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
      {/* Strategy Guide Modal */}
      <AnimatePresence>
        {showStrategyGuide && (
          <StrategyGuide onClose={() => setShowStrategyGuide(false)} />
        )}
      </AnimatePresence>

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
        <div className="math-header-actions">
          <button
            className="math-strategy-btn"
            onClick={() => setShowStrategyGuide(true)}
          >
            <Brain size={16} />
            <span>Mental Math Guide</span>
          </button>
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
        </div>
      </header>

      <div className="math-content">
        {/* Sidebar */}
        <aside className="math-sidebar glass-panel">
          {/* Exam Selector */}
          <div className="math-exam-tabs">
            {examNumbers.map(exam => (
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

              {/* Important Notice */}
              <div className="math-notice">
                <Eye size={16} />
                <span>No calculator or notes allowed! Solve in your head.</span>
                <button
                  className="notice-help"
                  onClick={() => setShowStrategyGuide(true)}
                >
                  Learn how →
                </button>
              </div>

              {/* Equations */}
              <div className="math-equations">
                <p className="math-eq-label">Solve for {currentLevel.variables.join(', ')} (each is 1-20):</p>
                {currentLevel.equations.map((eq, i) => (
                  <div key={i} className="math-equation">
                    <span className="math-eq-num">{i + 1}.</span>
                    <span className="math-eq-text">{eq}</span>
                  </div>
                ))}
              </div>

              {/* Answer Inputs */}
              <div className="math-answers">
                <p className="math-ans-label">Your answers:</p>
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
                        className={showResult?.type === 'wrong' && parseInt(answers[v]) !== currentLevel.answer[v] ? 'wrong' : ''}
                        disabled={isComplete}
                        placeholder="?"
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
                        <span>
                          Not quite right.
                          {attemptCount >= 2 && ' Try using the hint or solution!'}
                        </span>
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
                >
                  <Lightbulb size={16} />
                  {showHint ? 'Hide Hint' : 'Hint'}
                </button>
                <button
                  className="math-solution-btn"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  <BookOpen size={16} />
                  {showSolution ? 'Hide Solution' : 'Full Solution'}
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

              {/* Solution Walkthrough */}
              <AnimatePresence>
                {showSolution && currentLevel.solution && (
                  <SolutionWalkthrough
                    solution={currentLevel.solution}
                    equations={currentLevel.equations}
                    onClose={() => setShowSolution(false)}
                  />
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
