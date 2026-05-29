// ─── Smart Answer Grader ────────────────────────────────────────────────────
// Returns: { grade: 'perfect' | 'close' | 'wrong', xpMultiplier, reason }
//
// Grade tiers:
//   perfect  → 100% XP  — output matches exactly (or after trivial normalization)
//   close    →  70% XP  — meaning is correct but has minor formatting differences
//   wrong    →   0% XP  — output is semantically different

export function gradeAnswer(actual, expected) {
  if (!actual && actual !== 0) {
    return { grade: 'wrong', xpMultiplier: 0, reason: 'No output produced.' };
  }

  // ── 1. Exact match ─────────────────────────────────────────────────────────
  if (actual === expected) {
    return { grade: 'perfect', xpMultiplier: 1, reason: 'Perfect match!' };
  }

  // Normalise helpers
  const norm      = s => s.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const normWS    = s => norm(s).replace(/[^\S\n]+/g, ' ');   // collapse inline spaces
  const normLines = s => norm(s).split('\n').map(l => l.trim()).join('\n');
  const lower     = s => normLines(s).toLowerCase();

  const a = norm(actual);
  const e = norm(expected);

  // ── 2. Match after trimming each line (leading/trailing whitespace per line) ─
  if (normLines(a) === normLines(e)) {
    return {
      grade: 'perfect', xpMultiplier: 1,
      reason: 'Correct! (extra spaces at line edges are ignored)'
    };
  }

  // ── 3. Match after collapsing all whitespace ───────────────────────────────
  if (normWS(a) === normWS(e)) {
    return {
      grade: 'perfect', xpMultiplier: 1,
      reason: 'Correct! (spacing differences don\'t count here)'
    };
  }

  // ── 4. Case-insensitive match ──────────────────────────────────────────────
  if (lower(a) === lower(e)) {
    return {
      grade: 'close', xpMultiplier: 0.7,
      reason: 'Almost perfect! Capitalisation was slightly different — Python is case-sensitive, but the logic is right.'
    };
  }

  // ── 5. Numeric match — if expected is a number, compare values ─────────────
  const expectedLines = normLines(e).split('\n');
  const actualLines   = normLines(a).split('\n');

  if (expectedLines.length === actualLines.length) {
    const allNumericMatch = expectedLines.every((el, i) => {
      const en = parseFloat(el);
      const an = parseFloat(actualLines[i]);
      return !isNaN(en) && !isNaN(an) && Math.abs(en - an) < 1e-9;
    });
    if (allNumericMatch) {
      return {
        grade: 'perfect', xpMultiplier: 1,
        reason: 'Correct! Numbers match exactly.'
      };
    }

    // Close numeric — within a small delta (e.g. float rounding)
    const allNumericClose = expectedLines.every((el, i) => {
      const en = parseFloat(el);
      const an = parseFloat(actualLines[i]);
      return !isNaN(en) && !isNaN(an) && Math.abs(en - an) < 0.01;
    });
    if (allNumericClose) {
      return {
        grade: 'close', xpMultiplier: 0.7,
        reason: 'Very close! There\'s a tiny rounding difference in the numbers, but the approach is correct.'
      };
    }
  }

  // ── 6. Punctuation-only diff — same words/numbers, differs only in . , ! ? ─
  const stripPunct = s => s.replace(/[.,!?;:'"()]/g, '').replace(/\s+/g, ' ').trim();
  if (lower(stripPunct(a)) === lower(stripPunct(e))) {
    return {
      grade: 'close', xpMultiplier: 0.7,
      reason: 'Almost! The text is right but punctuation doesn\'t match exactly. Python compares character-by-character.'
    };
  }

  // ── 7. Line-count same, content similarity high ────────────────────────────
  if (expectedLines.length > 1 && actualLines.length === expectedLines.length) {
    const matchedLines = expectedLines.filter((el, i) =>
      normWS(el) === normWS(actualLines[i])
    ).length;
    const ratio = matchedLines / expectedLines.length;
    if (ratio >= 0.8) {
      return {
        grade: 'close', xpMultiplier: 0.7,
        reason: `Most lines are correct (${matchedLines}/${expectedLines.length})! Check the highlighted differences carefully.`
      };
    }
  }

  // ── 8. Extra/missing trailing newline only ─────────────────────────────────
  if (a.replace(/\n+$/, '') === e.replace(/\n+$/, '')) {
    return {
      grade: 'perfect', xpMultiplier: 1,
      reason: 'Correct! (trailing newline difference is fine)'
    };
  }

  // ── Default: wrong ─────────────────────────────────────────────────────────
  return {
    grade: 'wrong', xpMultiplier: 0,
    reason: 'The output doesn\'t match what\'s expected. Check spacing, spelling, and values carefully.'
  };
}

// ── Diff helper — returns per-line comparison for display ─────────────────────
// Returns array of { expected, actual, match: bool }
export function diffLines(actual, expected) {
  const aLines = (actual  || '').split('\n');
  const eLines = (expected || '').split('\n');
  const len    = Math.max(aLines.length, eLines.length);
  return Array.from({ length: len }, (_, i) => ({
    expected: eLines[i] ?? '',
    actual:   aLines[i] ?? '',
    match:    (aLines[i] ?? '') === (eLines[i] ?? ''),
  }));
}
