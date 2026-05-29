import React, { useState, useEffect } from 'react';
import {
  Trophy, Flame, Zap, Award, BookOpen, CheckCircle2, Lock,
  Play, ChevronDown, Sparkles, Star, Library, Compass, GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Dashboard.css';

// ─── Constants ───────────────────────────────────────────────────────────────
const STREAK_KEY = 'pyquest_streak_v2';
const ACTIVITY_KEY = 'pyquest_activity';
const DAILY_PROGRESS_KEY = 'pyquest_daily_progress';
const BEGINNER_PROGRESS_KEY = 'pyquest_beginner_progress';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255, 255, 255';
}

// Get today's date as YYYY-MM-DD string
function getToday() {
  return new Date().toISOString().split('T')[0];
}

// Get date string for N days ago
function getDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}

export default function Dashboard({
  xp,
  progress,
  levels,
  chapters,
  onStartLevel,
  onViewReference,
  onViewBeginner,
  onEarnBonusXP
}) {
  const [expandedChapter, setExpandedChapter] = useState(null);

  // ── Load Beginner Progress ─────────────────────────────────────────────────
  const [beginnerProgress, setBeginnerProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(BEGINNER_PROGRESS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Refresh beginner progress when component mounts or becomes visible
  useEffect(() => {
    const loadBeginnerProgress = () => {
      try {
        const saved = localStorage.getItem(BEGINNER_PROGRESS_KEY);
        if (saved) setBeginnerProgress(JSON.parse(saved));
      } catch {}
    };
    loadBeginnerProgress();

    // Also listen for storage changes (in case beginner page updates it)
    window.addEventListener('storage', loadBeginnerProgress);
    window.addEventListener('focus', loadBeginnerProgress);
    return () => {
      window.removeEventListener('storage', loadBeginnerProgress);
      window.removeEventListener('focus', loadBeginnerProgress);
    };
  }, []);

  // Calculate beginner stats
  const beginnerLessonsCompleted = Object.values(beginnerProgress).filter(l => l.completed).length;
  const beginnerXP = Object.values(beginnerProgress).reduce((sum, l) => sum + (l.xp || 0), 0);
  const totalBeginnerLessons = 16; // Total lessons in beginner course

  // Combined XP (main game + beginner)
  const combinedXP = xp + beginnerXP;

  // ── Activity Tracking (real dates when user completed levels) ──────────────
  const [activityDates, setActivityDates] = useState(() => {
    try {
      const saved = localStorage.getItem(ACTIVITY_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {}; // { "2024-01-15": true, "2024-01-16": true, ... }
  });

  // ── Daily Progress (tracks XP and levels completed TODAY only) ─────────────
  const [dailyProgress, setDailyProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(DAILY_PROGRESS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Reset if it's a new day
        if (parsed.date !== getToday()) {
          return { date: getToday(), xpEarned: 0, levelsCompleted: 0, aiAsked: false, claimed: false };
        }
        return parsed;
      }
    } catch {}
    return { date: getToday(), xpEarned: 0, levelsCompleted: 0, aiAsked: false, claimed: false };
  });

  // Calculate current levels solved count (completed: true) - including beginner
  const mainLevelsCompleted = Object.values(progress).filter(l => l.completed).length;
  const totalCompleted = mainLevelsCompleted + beginnerLessonsCompleted;
  const totalXpFromLevels = Object.values(progress).reduce((sum, p) => sum + (p.xp || 0), 0);

  // ── Calculate Real Streak ──────────────────────────────────────────────────
  const calculateStreak = () => {
    let streak = 0;
    let checkDate = getToday();

    // If user hasn't been active today, start checking from yesterday
    if (!activityDates[checkDate]) {
      checkDate = getDaysAgo(1);
    }

    // Count consecutive days backward
    for (let i = 0; i < 365; i++) {
      const dateToCheck = getDaysAgo(i + (activityDates[getToday()] ? 0 : 1));
      if (activityDates[dateToCheck]) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  // ── Build Week History (last 7 days) ───────────────────────────────────────
  const getWeekHistory = () => {
    const history = [];
    for (let i = 6; i >= 0; i--) {
      const date = getDaysAgo(i);
      history.push(!!activityDates[date]);
    }
    return history;
  };

  const streak = calculateStreak();
  const weekHistory = getWeekHistory();

  // ── Track Activity When Progress Changes ───────────────────────────────────
  useEffect(() => {
    const today = getToday();

    // Mark today as active if user has completed any level
    if (totalCompleted > 0 && !activityDates[today]) {
      const newActivity = { ...activityDates, [today]: true };
      setActivityDates(newActivity);
      localStorage.setItem(ACTIVITY_KEY, JSON.stringify(newActivity));
    }

    // Update daily progress
    const prevCompleted = dailyProgress.levelsAtStart || 0;
    const levelsToday = totalCompleted - prevCompleted;
    const xpToday = Math.max(0, xp - (dailyProgress.xpAtStart || 0));

    if (dailyProgress.date !== today) {
      // New day - reset tracking
      const newDaily = {
        date: today,
        xpEarned: 0,
        levelsCompleted: 0,
        aiAsked: dailyProgress.aiAsked || false,
        claimed: false,
        xpAtStart: xp,
        levelsAtStart: totalCompleted
      };
      setDailyProgress(newDaily);
      localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newDaily));
    } else if (xpToday !== dailyProgress.xpEarned || levelsToday !== dailyProgress.levelsCompleted) {
      // Same day - update progress
      const newDaily = {
        ...dailyProgress,
        xpEarned: xpToday,
        levelsCompleted: levelsToday
      };
      setDailyProgress(newDaily);
      localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newDaily));
    }
  }, [progress, xp, totalCompleted]);

  // ── Daily Quests (real tracking) ───────────────────────────────────────────
  const quests = [
    {
      id: 'xp',
      desc: 'Earn 100 XP Today',
      target: 100,
      current: Math.min(dailyProgress.xpEarned, 100),
      reward: 50,
      completed: dailyProgress.xpEarned >= 100
    },
    {
      id: 'levels',
      desc: 'Complete 3 Levels Today',
      target: 3,
      current: Math.min(dailyProgress.levelsCompleted, 3),
      reward: 50,
      completed: dailyProgress.levelsCompleted >= 3
    },
    {
      id: 'streak',
      desc: 'Maintain Your Streak',
      target: 1,
      current: activityDates[getToday()] ? 1 : 0,
      reward: 25,
      completed: !!activityDates[getToday()]
    }
  ];

  // ── Claim Daily Reward ─────────────────────────────────────────────────────
  const canClaimReward = () => {
    return !dailyProgress.claimed && activityDates[getToday()];
  };

  const handleClaimDailyReward = () => {
    if (!canClaimReward()) return;

    const newDaily = { ...dailyProgress, claimed: true };
    setDailyProgress(newDaily);
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newDaily));

    // Award +50 XP via callback
    onEarnBonusXP(50);
  };

  // ── Rank Tiers ─────────────────────────────────────────────────────────────
  const getRankInfo = (totalXP) => {
    if (totalXP >= 5000) {
      return { name: 'Diamond Architect', emoji: '💎', color: '#00d2ff', min: 5000, max: 10000 };
    } else if (totalXP >= 3000) {
      return { name: 'Platinum Engineer', emoji: '⚙️', color: '#e5e5e5', min: 3000, max: 4999 };
    } else if (totalXP >= 1500) {
      return { name: 'Gold Programmer', emoji: '🏆', color: '#ffd60a', min: 1500, max: 2999 };
    } else if (totalXP >= 500) {
      return { name: 'Silver Hacker', emoji: '🛡️', color: '#c0c0c0', min: 500, max: 1499 };
    } else {
      return { name: 'Bronze Coder', emoji: '🌱', color: '#cd7f32', min: 0, max: 499 };
    }
  };

  const rank = getRankInfo(combinedXP);
  const nextRank = combinedXP >= 5000 ? null : getRankInfo(rank.max + 1);
  const rankRange = rank.max - rank.min;
  const rankProgress = xp - rank.min;
  const rankPct = nextRank ? Math.min(Math.round((rankProgress / rankRange) * 100), 100) : 100;

  // ── Competitors Leaderboard ───────────────────────────────────────────────
  // Cute bots whose XP climbs dynamically relative to the user to maintain a tight race
  const getLeaderboard = () => {
    const defaultBots = [
      { name: 'Al-Gorithm 🧙', xp: 2650, isBot: true },
      { name: 'CodeWarrior ⚔️', xp: 1800, isBot: true },
      { name: 'ByteSize 🍪', xp: 1250, isBot: true },
      { name: 'PythonPet 🐍', xp: 750, isBot: true },
      { name: 'Pylo (Tutor) 🤖', xp: 450, isBot: true }
    ];

    // Scale bots' XP so they stay competitive around the user's XP
    const scaledBots = defaultBots.map(bot => {
      let botXP = bot.xp;
      if (combinedXP > 500) {
        // Adjust bot XP to keep things exciting!
        const multiplier = combinedXP / 1400;
        botXP = Math.round(bot.xp * Math.max(0.6, Math.min(multiplier, 2.2)));
      }
      return { ...bot, xp: botXP };
    });

    const list = [...scaledBots, { name: 'You 🏆', xp: combinedXP, isBot: false }];
    return list.sort((a, b) => b.xp - a.xp);
  };

  const leaderboard = getLeaderboard();
  const userRank = leaderboard.findIndex(item => !item.isBot) + 1;

  // Chapter cards roadmap
  const roadmapChapters = chapters.map((ch, idx) => {
    const chLevels = levels.filter(l => l.chapter === ch.name);
    const completedCount = chLevels.filter(l => progress[l.id]?.completed).length;
    const progressPct = chLevels.length > 0 ? Math.round((completedCount / chLevels.length) * 100) : 0;
    return {
      ...ch,
      index: idx + 1,
      levels: chLevels,
      completedCount,
      progressPct
    };
  });

  // Calculate current unlocked levels
  // (In review mode all are unlocked, but let's check completed states for display)
  const isLevelUnlocked = (levelId) => {
    if (levelId === 1) return true;
    // Unlocked if previous is completed
    const prev = levels.find(l => l.id === levelId - 1);
    return prev ? !!progress[prev.id]?.completed : true;
  };

  // Entry animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  const daysLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <motion.div
      className="dashboard-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* ── Top Navbar ──────────────────────────────────────────────── */}
      <motion.div className="dash-navbar glass-panel" variants={cardVariants}>
        <div className="dash-logo-section">
          <div className="dash-logo-icon">
            <Compass size={24} />
          </div>
          <div>
            <h1 className="dash-logo-title">PyQuest Hub</h1>
            <p className="dash-logo-subtitle">Your interactive Python quest map</p>
          </div>
        </div>

        <div className="dash-nav-actions">
          <div className="xp-indicator">
            <Zap size={14} fill="currentColor" />
            <span>{combinedXP} XP</span>
          </div>

          <button className="btn btn-beginner btn-sm" onClick={onViewBeginner}>
            <GraduationCap size={14} />
            <span>Beginner</span>
          </button>

          <button className="btn btn-ghost btn-sm" onClick={onViewReference}>
            <Library size={14} />
            <span>Python Library</span>
          </button>
        </div>
      </motion.div>

      {/* ── Top Stats / Progression Row ────────────────────────────── */}
      <div className="progression-grid">
        {/* 1. Rank Card */}
        <motion.div className="prog-card glass-panel" variants={cardVariants}>
          <div className="prog-card-glow" style={{ background: rank.color }} />
          <div className="prog-card-header">
            <span className="prog-card-title">My Rank</span>
            <Award className="prog-card-icon" size={14} />
          </div>
          <div className="rank-badge-wrap">
            <span className="rank-badge-icon">{rank.emoji}</span>
            <span className="rank-badge-name">{rank.name}</span>
          </div>
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${rankPct}%` }}
              transition={{ duration: 0.8 }}
              style={{ background: `linear-gradient(90deg, ${rank.color}, #ffffff)` }}
            />
          </div>
          {nextRank && (
            <span className="rank-next-tier">
              {rankPct}% towards {nextRank.emoji} {nextRank.name}
            </span>
          )}
          {!nextRank && <span className="rank-next-tier">Max Rank Reached! 👑</span>}
        </motion.div>

        {/* 2. Streak Card */}
        <motion.div className="prog-card glass-panel" variants={cardVariants}>
          <div className="prog-card-glow" style={{ background: '#ff9f0a' }} />
          <div className="prog-card-header">
            <span className="prog-card-title">Coding Streak</span>
            <Flame className="prog-card-icon" size={14} style={{ color: '#ff9f0a' }} />
          </div>
          <div className="streak-main">
            <span className="streak-count">{streak}</span>
            <span className="streak-unit">{streak === 1 ? 'Day' : 'Days'}</span>
          </div>
          <div className="streak-calendar">
            {weekHistory.map((active, i) => {
              const todayIdx = 6; // Last item is today
              return (
                <div key={i} className="day-dot">
                  <span className={`day-bubble ${active ? 'active' : ''} ${i === todayIdx ? 'today' : ''}`}>
                    {active ? '🔥' : daysLabels[(new Date().getDay() + i - 6 + 7) % 7]}
                  </span>
                  <span className="day-label">{daysLabels[(new Date().getDay() + i - 6 + 7) % 7]}</span>
                </div>
              );
            })}
          </div>
          <button
            className="claim-reward-btn"
            onClick={handleClaimDailyReward}
            disabled={!canClaimReward()}
          >
            {dailyProgress.claimed ? 'Daily Gift Claimed! ✓' : canClaimReward() ? 'Claim Daily Gift (+50 XP)' : 'Complete a level to claim!'}
          </button>
        </motion.div>

        {/* 3. Daily Quests Card */}
        <motion.div className="prog-card glass-panel" variants={cardVariants}>
          <div className="prog-card-glow" style={{ background: '#30d158' }} />
          <div className="prog-card-header">
            <span className="prog-card-title">Daily Missions</span>
            <Sparkles className="prog-card-icon" size={14} style={{ color: '#30d158' }} />
          </div>
          <div className="quest-list">
            {quests.map(q => {
              const progressPct = Math.min((q.current / q.target) * 100, 100);
              return (
                <div key={q.id} className={`quest-item ${q.completed ? 'completed' : ''}`}>
                  <div className="quest-check">
                    <CheckCircle2 size={12} />
                  </div>
                  <div className="quest-info">
                    <div className="quest-top-row">
                      <p className="quest-desc">{q.desc}</p>
                      <span className="quest-xp-reward">+{q.reward} XP</span>
                    </div>
                    <div className="quest-progress-bar-wrap">
                      <div className="quest-progress-bar" style={{ width: `${progressPct}%` }} />
                    </div>
                    <span className="quest-progress-text">
                      {q.current} / {q.target} {q.completed && '✓'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 4. Global Leaderboard Card */}
        <motion.div className="prog-card glass-panel" variants={cardVariants}>
          <div className="prog-card-glow" style={{ background: '#ffd60a' }} />
          <div className="prog-card-header">
            <span className="prog-card-title">Global Ranking</span>
            <Trophy className="prog-card-icon" size={14} style={{ color: '#ffd60a' }} />
          </div>
          <div className="leaderboard-list">
            {leaderboard.slice(0, 5).map((player, idx) => (
              <div
                key={player.name}
                className={`leader-row ${!player.isBot ? 'user-row' : ''}`}
              >
                <span className="leader-rank-num">#{idx + 1}</span>
                <span className="leader-name">{player.name}</span>
                <span className="leader-xp">{player.xp} XP</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Section Title ──────────────────────────────────────────────── */}
      <h2 className="dash-section-title">
        <span>Learning Roadmap</span>
      </h2>

      {/* ── Beginner Course Card ─────────────────────────────────────── */}
      <motion.div
        className="beginner-course-card glass-panel"
        variants={cardVariants}
        onClick={onViewBeginner}
      >
        <div className="beginner-course-glow" />
        <div className="beginner-course-content">
          <div className="beginner-course-icon">
            <GraduationCap size={28} />
          </div>
          <div className="beginner-course-info">
            <div className="beginner-course-header">
              <span className="beginner-course-badge">RECOMMENDED</span>
              <h3>Zero to Hero: Python Fundamentals</h3>
            </div>
            <p className="beginner-course-desc">
              Complete beginner course with {totalBeginnerLessons} interactive lessons. Learn strings, numbers, booleans, lists, and more.
            </p>
            <div className="beginner-course-stats">
              <span className="beginner-course-progress">
                <CheckCircle2 size={14} />
                {beginnerLessonsCompleted} / {totalBeginnerLessons} lessons
              </span>
              <span className="beginner-course-xp">
                <Zap size={14} />
                {beginnerXP} XP earned
              </span>
            </div>
            <div className="beginner-course-bar-track">
              <div
                className="beginner-course-bar-fill"
                style={{ width: `${(beginnerLessonsCompleted / totalBeginnerLessons) * 100}%` }}
              />
            </div>
          </div>
          <div className="beginner-course-action">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      </motion.div>

      {/* ── Chapters Grid ────────────────────────────────────────────── */}
      <div className="roadmap-grid">
        {roadmapChapters.map(ch => {
          const isExpanded = expandedChapter === ch.name;
          const chColorRgb = hexToRgb(ch.color);

          return (
            <motion.div
              key={ch.name}
              className="chapter-card"
              variants={cardVariants}
              style={{
                '--ch-color': ch.color,
                '--ch-color-rgb': chColorRgb
              }}
            >
              <div className="chapter-card-glow" />

              {/* Card Header (clickable to expand levels list) */}
              <div
                className="chapter-card-header"
                onClick={() => setExpandedChapter(isExpanded ? null : ch.name)}
              >
                <div className="chapter-emoji-circle">
                  {ch.emoji}
                </div>

                <div className="chapter-header-main">
                  <span className="chapter-card-num">Chapter {ch.index}</span>
                  <h3 className="chapter-card-name">{ch.name}</h3>

                  <span className="chapter-progress-fraction">
                    {ch.completedCount} / {ch.levels.length} levels complete
                  </span>
                  <div className="chapter-progress-bar-track">
                    <div
                      className="chapter-progress-bar-fill"
                      style={{ width: `${ch.progressPct}%` }}
                    />
                  </div>
                </div>

                <ChevronDown
                  size={18}
                  className={`chapter-chevron ${isExpanded ? 'expanded' : ''}`}
                />
              </div>

              {/* Levels Drawer (Accordion) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    className="levels-drawer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {ch.levels.map(level => {
                      const isCompleted = !!progress[level.id]?.completed;
                      const isUnlocked = isLevelUnlocked(level.id);

                      const diffColors = {
                        Beginner: '#30d158',
                        Intermediate: '#ffd60a',
                        Advanced: '#ff453a'
                      };

                      return (
                        <div key={level.id} className={`dash-level-row ${!isUnlocked ? 'locked' : ''}`}>
                          <div className="dash-level-left">
                            <div className={`dash-level-status ${isCompleted ? 'done' : !isUnlocked ? 'locked' : 'todo'}`}>
                              {isCompleted ? <CheckCircle2 size={16} /> : !isUnlocked ? <Lock size={14} /> : <BookOpen size={16} />}
                            </div>
                            <div className="dash-level-details">
                              <span className="dash-level-title">{level.title}</span>
                              <div className="dash-level-meta">
                                <span
                                  className="dash-level-difficulty"
                                  style={{ color: diffColors[level.difficulty] }}
                                >
                                  {level.difficulty}
                                </span>
                                <span className="dash-level-xp">
                                  <Star size={10} fill="currentColor" /> {level.xp} XP
                                </span>
                              </div>
                            </div>
                          </div>

                          {isUnlocked && (
                            <button
                              className={`dash-play-btn ${isCompleted ? 'review' : ''}`}
                              onClick={() => onStartLevel(level.id)}
                            >
                              <Play size={10} fill="currentColor" />
                              <span>{isCompleted ? 'Review' : 'Play'}</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
