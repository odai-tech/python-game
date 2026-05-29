import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, X, Lightbulb, Code2, Terminal, BookOpen, ArrowLeft } from 'lucide-react';
import { referenceCategories, searchReference } from './reference.js';
import './ReferencePage.css';

// ── Code block with copy ───────────────────────────────────────────────────────
function CodeExample({ code, output }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="ref-example">
      <div className="ref-code-block">
        <div className="ref-code-header">
          <span className="ref-code-label"><Code2 size={11} /> Python</span>
          <button className="ref-copy-btn" onClick={handleCopy}>
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="ref-code-pre"><code>{code}</code></pre>
      </div>
      {output && (
        <div className="ref-output-block">
          <span className="ref-output-label"><Terminal size={11} /> Output</span>
          <pre className="ref-output-pre">{output}</pre>
        </div>
      )}
    </div>
  );
}

// ── Single command card ────────────────────────────────────────────────────────
function CommandCard({ cmd, accentColor, bookChapter, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      className={`ref-cmd-card ${open ? 'open' : ''}`}
      style={{ '--accent': accentColor }}
      layout
    >
      {/* Header row */}
      <button className="ref-cmd-header" onClick={() => setOpen(o => !o)}>
        <div className="ref-cmd-header-left">
          <code className="ref-cmd-name">{cmd.name}</code>
          {cmd.returns && <span className="ref-cmd-returns">→ {cmd.returns}</span>}
        </div>
        <div className="ref-cmd-header-right">
          <span className="ref-cmd-desc-preview">{cmd.description.split('.')[0]}.</span>
          {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="ref-cmd-body">
              {/* Syntax */}
              <div className="ref-syntax-block">
                <span className="ref-syntax-label">Syntax</span>
                <pre className="ref-syntax-pre">{cmd.syntax}</pre>
              </div>

              {/* Full description */}
              <p className="ref-cmd-full-desc">{cmd.description}</p>

              {/* Examples */}
              {cmd.examples && cmd.examples.length > 0 && (
                <div className="ref-examples">
                  <span className="ref-examples-label">Examples</span>
                  <div className="ref-examples-list">
                    {cmd.examples.map((ex, i) => (
                      <CodeExample key={i} code={ex.code} output={ex.output} />
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistake */}
              {cmd.commonMistake && (
                <div className="ref-mistake">
                  <span className="ref-mistake-icon">⚠️</span>
                  <div>
                    <span className="ref-mistake-label">Common Mistake: </span>
                    <span>{cmd.commonMistake}</span>
                  </div>
                </div>
              )}

              {/* Tip */}
              {cmd.tip && (
                <div className="ref-tip">
                  <Lightbulb size={13} className="ref-tip-icon" />
                  <span>{cmd.tip}</span>
                </div>
              )}

              {/* Book chapter badge */}
              {bookChapter && (
                <div className="ref-book-badge">
                  📚 {bookChapter} — Python Crash Course
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Category section ───────────────────────────────────────────────────────────
function CategorySection({ cat, isSearching }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.section
      className="ref-category"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Category header */}
      <button
        className="ref-cat-header"
        style={{ '--cat-color': cat.color }}
        onClick={() => setCollapsed(c => !c)}
      >
        <div className="ref-cat-header-left">
          <span className="ref-cat-emoji">{cat.emoji}</span>
          <div>
            <h2 className="ref-cat-name">{cat.name}</h2>
            <p className="ref-cat-desc">{cat.description}</p>
          </div>
        </div>
        <div className="ref-cat-header-right">
          <span className="ref-cat-count">{cat.commands.length} commands</span>
          {collapsed ? <ChevronRight size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Commands list */}
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="ref-commands-list">
              {cat.commands.map((cmd, i) => (
                <CommandCard
                  key={cmd.name + i}
                  cmd={cmd}
                  accentColor={cat.color}
                  bookChapter={cat.bookChapter}
                  defaultOpen={isSearching && cat.commands.length <= 3}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// ── Main Reference Page ────────────────────────────────────────────────────────
export default function ReferencePage({ onBack }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const isSearching = query.trim().length > 0;

  const filtered = useMemo(() => {
    let results = isSearching ? searchReference(query) : referenceCategories;
    if (activeFilter !== 'All') {
      results = results.filter(cat => cat.name === activeFilter);
    }
    return results;
  }, [query, activeFilter, isSearching]);

  const totalCommands = referenceCategories.reduce((s, c) => s + c.commands.length, 0);

  return (
    <div className="ref-page">
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="ref-topbar glass-panel">
        <div className="ref-topbar-left">
          <button className="ref-back-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Game
          </button>
          <div className="ref-topbar-title">
            <BookOpen size={20} className="ref-topbar-icon" />
            <div>
              <h1 className="ref-title">Python Reference</h1>
              <p className="ref-subtitle">{totalCommands} commands & concepts · searchable</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="ref-search-wrap">
          <Search size={15} className="ref-search-icon" />
          <input
            className="ref-search-input"
            placeholder="Search any command, method, or keyword…"
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveFilter('All'); }}
            autoFocus
          />
          {query && (
            <button className="ref-search-clear" onClick={() => setQuery('')}>
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* ── Category filter chips ────────────────────────────────────────── */}
      <div className="ref-filter-row">
        <button
          className={`ref-filter-chip ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        {referenceCategories.map(cat => (
          <button
            key={cat.name}
            className={`ref-filter-chip ${activeFilter === cat.name ? 'active' : ''}`}
            style={{ '--chip-color': cat.color }}
            onClick={() => { setActiveFilter(cat.name === activeFilter ? 'All' : cat.name); setQuery(''); }}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* ── Results area ─────────────────────────────────────────────────── */}
      <div className="ref-content">
        {filtered.length === 0 ? (
          <motion.div className="ref-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="ref-empty-emoji">🔍</span>
            <h3 className="ref-empty-title">No results for "{query}"</h3>
            <p className="ref-empty-body">Try searching for a function name like <code>print</code>, a concept like <code>recursion</code>, or a symbol like <code>lambda</code>.</p>
            <button className="btn btn-ghost btn-sm" onClick={() => setQuery('')}>Clear search</button>
          </motion.div>
        ) : (
          filtered.map(cat => (
            <CategorySection
              key={cat.name}
              cat={cat}
              isSearching={isSearching}
            />
          ))
        )}
      </div>
    </div>
  );
}
