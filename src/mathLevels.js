// TestAS Mathematical Equations - Practice Questions
// All variables are whole numbers from 1-20. Every answer is a natural number
// (no negatives, no fractions). Each question is verified to have exactly one
// solution in the 1-20 range. Difficulty: MEDIUM (3 equations / 3 variables)
// and HARD (4 equations / 4 variables, including quadratics).

export const mathChapters = [
  { id: 2, name: 'Medium', description: '3 equations, 3 variables', icon: '🟡' },
  { id: 3, name: 'Hard', description: '4 equations or quadratic', icon: '🔴' },
];

// Mental Math Strategies Guide
export const mentalMathStrategies = [
  {
    id: 'substitution',
    title: 'The Substitution Method',
    emoji: '🔄',
    shortDesc: 'Replace one variable with another',
    steps: [
      'Find an equation where one variable is ALONE on one side (like A = B + 5)',
      'Take that expression and REPLACE that variable everywhere else',
      'Now you have an equation with only ONE variable - solve it!',
      'Plug the answer back to find the other variables'
    ],
    example: {
      equations: ['A = B + 3', 'A + B = 11'],
      walkthrough: [
        'Step 1: Look! A is alone: A = B + 3',
        'Step 2: Replace A in the second equation: (B + 3) + B = 11',
        'Step 3: Simplify: 2B + 3 = 11 → 2B = 8 → B = 4',
        'Step 4: Go back: A = 4 + 3 = 7 ✓'
      ]
    },
    mentalTrick: 'Always start with the equation where a variable is ALONE. That\'s your golden ticket!'
  },
  {
    id: 'express-in-terms',
    title: 'Express Everything in Terms of One Variable',
    emoji: '🎯',
    shortDesc: 'Rewrite all variables using just one letter',
    steps: [
      'Pick the variable that appears most simply (often in "X = something")',
      'Rewrite ALL other variables using that one variable',
      'Substitute everything into the most complex equation',
      'You\'ll get one equation with one unknown - solve it!'
    ],
    example: {
      equations: ['A = 2B', 'C = B + 5', 'A + B + C = 20'],
      walkthrough: [
        'Step 1: B seems to be the key - A and C are written in terms of B',
        'Step 2: Replace in equation 3: (2B) + B + (B + 5) = 20',
        'Step 3: Simplify: 4B + 5 = 20 → 4B = 15 → B = 3.75... wait!',
        'Step 4: Hmm, B must be a whole number. Let me recheck... 4B = 15 doesn\'t work.',
        '(This is why we always verify - adjust if needed!)'
      ]
    },
    mentalTrick: 'Count how many times each variable appears. Start with the one that\'s defined most simply!'
  },
  {
    id: 'pattern-recognition',
    title: 'Spot the Patterns',
    emoji: '👀',
    shortDesc: 'Recognize common equation patterns',
    steps: [
      'A = 2B means "A is double B" - if you find B, just double it!',
      'A - B = 5 means "A is 5 more than B" - they\'re 5 apart',
      'A × B = 12 with small numbers? Try: 1×12, 2×6, 3×4',
      'A + B = 10 and A - B = 2? Add them: 2A = 12, so A = 6!'
    ],
    example: {
      equations: ['A + B = 14', 'A - B = 4'],
      walkthrough: [
        'Trick: Add both equations together!',
        '(A + B) + (A - B) = 14 + 4',
        '2A = 18',
        'A = 9, and since A - B = 4, B = 5 ✓'
      ]
    },
    mentalTrick: 'When you see + and - with same variables, ADD the equations to eliminate one variable instantly!'
  },
  {
    id: 'working-backwards',
    title: 'Working Backwards from Constraints',
    emoji: '🔙',
    shortDesc: 'Use the 1-20 rule to narrow down possibilities',
    steps: [
      'Remember: All answers are between 1 and 20',
      'If A × 3 = B, and B ≤ 20, then A can only be 1-6',
      'If A² appears, A can only be 1, 2, 3, or 4 (since 5² = 25 > 20)',
      'Start with the most restrictive equation!'
    ],
    example: {
      equations: ['A² = B + 7', 'B = A + 9'],
      walkthrough: [
        'Step 1: A² must give a reasonable number. Try A = 1, 2, 3, 4...',
        'Step 2: If A = 4: A² = 16, so B + 7 = 16, B = 9',
        'Step 3: Check equation 2: B = A + 9 → 9 = 4 + 9? No! 9 ≠ 13',
        'Step 4: Try A = 3: A² = 9, so B = 2. Check: 2 = 3 + 9? No!',
        'Step 5: Try A = 5: A² = 25... too big! Keep trying systematically.'
      ]
    },
    mentalTrick: 'For squares (A²), only try 1, 2, 3, 4. For cubes (A³), only try 1, 2. Saves tons of time!'
  },
  {
    id: 'division-clues',
    title: 'Division Gives You Clues',
    emoji: '➗',
    shortDesc: 'Division equations limit your options',
    steps: [
      'If A ÷ 2 = B, then A must be EVEN (2, 4, 6, 8...)',
      'If A ÷ 3 = B, then A must be divisible by 3 (3, 6, 9, 12, 15, 18)',
      'If 12 ÷ A = B, then A must be a factor of 12 (1, 2, 3, 4, 6, 12)',
      'This immediately narrows your options!'
    ],
    example: {
      equations: ['A ÷ 3 = B', 'A + B = 16'],
      walkthrough: [
        'Step 1: A must be divisible by 3: could be 3, 6, 9, 12, 15, 18',
        'Step 2: If A = 12: B = 12 ÷ 3 = 4. Check: 12 + 4 = 16 ✓',
        'Done! A = 12, B = 4'
      ]
    },
    mentalTrick: 'See division? Immediately list the multiples or factors. Your answer is hiding there!'
  },
  {
    id: 'quick-mental-math',
    title: '30-Second Mental Math Tips',
    emoji: '⚡',
    shortDesc: 'Speed tricks for the test',
    steps: [
      'Read ALL equations first - spot the easiest one',
      'Look for a variable that\'s ALONE (like B = 5 or A = C + 2)',
      'Substitute and simplify in your head, not on paper',
      'Always do a 5-second check: plug your answers back in!'
    ],
    example: {
      equations: ['B = 7', 'A = B + 3', 'C = A × 2'],
      walkthrough: [
        'Instant! B = 7 is given directly',
        'A = 7 + 3 = 10',
        'C = 10 × 2 = 20',
        'Done in 5 seconds!'
      ]
    },
    mentalTrick: 'Scan for "freebies" - equations where a variable equals a number directly!'
  }
];

// Helper function to create detailed solution steps
function createSolution(steps, finalCheck) {
  return {
    steps,
    finalCheck,
    timeEstimate: steps.length <= 3 ? '20-30 sec' : steps.length <= 5 ? '35-50 sec' : '50-70 sec'
  };
}

export const mathLevels = [
  {
    id: 101,
    exam: 1,
    number: '1.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B + C = 20', '3 × C + 3 × B = A + 47', 'A = 2 × C - 25'],
    variables: ['A', 'B', 'C'],
    answer: { A: 13, B: 1, C: 19 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 2 × C - 25,  B = 20 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 3 × B = A + 47"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 19"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 19 into the relations above to get every value.",
        equation: "A=13, B=1, C=19"
      }
    ], "A=13, B=1, C=19 — verify in all equations."),
  },
  {
    id: 102,
    exam: 1,
    number: '1.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C = A - 12', '2 × C + 25 = A + 2 × B', 'B = 3 × C - 1'],
    variables: ['A', 'B', 'C'],
    answer: { A: 15, B: 8, C: 3 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C + 12,  B = 3 × C - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 25 = A + 2 × B"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 3 into the relations above to get every value.",
        equation: "A=15, B=8, C=3"
      }
    ], "A=15, B=8, C=3 — verify in all equations."),
  },
  {
    id: 103,
    exam: 1,
    number: '1.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['2 × A + 3 × B = C + 84', 'A - B = 5', 'A = 20 × C'],
    variables: ['A', 'B', 'C'],
    answer: { A: 20, B: 15, C: 1 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A - 5,  C = A ÷ 20"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 3 × B = C + 84"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 20 into the relations above to get every value.",
        equation: "A=20, B=15, C=1"
      }
    ], "A=20, B=15, C=1 — verify in all equations."),
  },
  {
    id: 104,
    exam: 1,
    number: '1.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + 3 × C = 2 × B + 66', 'A = 11 × B', 'C = 2 × A - 3'],
    variables: ['A', 'B', 'C'],
    answer: { A: 11, B: 1, C: 19 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A ÷ 11,  C = 2 × A - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 3 × C = 2 × B + 66"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 11 into the relations above to get every value.",
        equation: "A=11, B=1, C=19"
      }
    ], "A=11, B=1, C=19 — verify in all equations."),
  },
  {
    id: 105,
    exam: 1,
    number: '1.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B = A - 4', '3 × A + 2 × B = C + 3', 'C = 3 × A - 1'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 1, C: 14 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A - 4,  C = 3 × A - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + 2 × B = C + 3"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 5 into the relations above to get every value.",
        equation: "A=5, B=1, C=14"
      }
    ], "A=5, B=1, C=14 — verify in all equations."),
  },
  {
    id: 106,
    exam: 1,
    number: '1.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 17', 'B = 2 × A - 14', 'A² = 121', 'D = 3 × A - 24'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 8, C: 6, D: 9 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² = 121, so A = √121 = 11 (take the positive root)."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 14,  C = 17 - A,  D = 3 × A - 24"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 11 into each relation.",
        equation: "A=11, B=8, C=6, D=9"
      }
    ], "A=11, B=8, C=6, D=9 — verify in all equations."),
  },
  {
    id: 107,
    exam: 1,
    number: '1.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × B - 33', '2 × B + C = D + 41', 'D + B = 25', 'C = B + 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 15, B: 16, C: 18, D: 9 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 33,  C = B + 2,  D = 25 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + C = D + 41"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 16 into the relations above to get every value.",
        equation: "A=15, B=16, C=18, D=9"
      }
    ], "A=15, B=16, C=18, D=9 — verify in all equations."),
  },
  {
    id: 108,
    exam: 1,
    number: '1.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = D - 2', 'C = 3 × D - 22', 'D + 3 × B + 2 × C = 30', 'A = 2 × D - 9'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 6, C: 2, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 2 × D - 9,  B = D - 2,  C = 3 × D - 22"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + 3 × B + 2 × C = 30"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 8"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 8 into the relations above to get every value.",
        equation: "A=7, B=6, C=2, D=8"
      }
    ], "A=7, B=6, C=2, D=8 — verify in all equations."),
  },
  {
    id: 109,
    exam: 1,
    number: '1.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - B = 18', 'A = D - 5', '2 × D + 3 × B + C = A + 42', 'C = D - 4'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 1, C: 15, D: 19 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D - 5,  B = D - 18,  C = D - 4"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + 3 × B + C = A + 42"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 19"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 19 into the relations above to get every value.",
        equation: "A=14, B=1, C=15, D=19"
      }
    ], "A=14, B=1, C=15, D=19 — verify in all equations."),
  },
  {
    id: 110,
    exam: 1,
    number: '1.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = A - 7', 'A² + A = 182', 'C = 2 × A - 11', 'D + A = 33'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 6, C: 15, D: 20 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + A = 182 → A(A + 1) = 182. Find two consecutive numbers whose product is 182: 13 × 14 = 182, so A = 13."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 7,  C = 2 × A - 11,  D = 33 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 13 into each relation.",
        equation: "A=13, B=6, C=15, D=20"
      }
    ], "A=13, B=6, C=15, D=20 — verify in all equations."),
  },
  {
    id: 111,
    exam: 1,
    number: '1.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 3 × A + 1', 'B + A = 10', 'C + A = 12', '3 × A + 3 × B + 2 × C + 4 = 3 × D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 5, C: 7, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 10 - A,  C = 12 - A,  D = 3 × A + 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + 3 × B + 2 × C + 4 = 3 × D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 5 into the relations above to get every value.",
        equation: "A=5, B=5, C=7, D=16"
      }
    ], "A=5, B=5, C=7, D=16 — verify in all equations."),
  },
  {
    id: 112,
    exam: 1,
    number: '1.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A - D = 6', '2 × A + 3 × C + D = B + 95', 'C = 2 × A - 16', 'A - B = 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 4, C: 18, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = A - 13,  C = 2 × A - 16,  D = A - 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 3 × C + D = B + 95"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 17"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 17 into the relations above to get every value.",
        equation: "A=17, B=4, C=18, D=11"
      }
    ], "A=17, B=4, C=18, D=11 — verify in all equations."),
  },
  {
    id: 113,
    exam: 1,
    number: '1.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 2 × D - 5', '3 × D + 2 × A = B + 2 × C + 23', 'B = 2 × D - 8', 'C = D - 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 6, C: 5, D: 7 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 2 × D - 5,  B = 2 × D - 8,  C = D - 2"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + 2 × A = B + 2 × C + 23"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 7 into the relations above to get every value.",
        equation: "A=9, B=6, C=5, D=7"
      }
    ], "A=9, B=6, C=5, D=7 — verify in all equations."),
  },
  {
    id: 114,
    exam: 1,
    number: '1.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - A = 132', 'D + A = 17', 'C + A = 24', 'B = 2 × A - 15'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 12, B: 9, C: 12, D: 5 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - A = 132 → A(A - 1) = 132. Two consecutive numbers with product 132: 12 × 11 = 132, so A = 12."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 15,  C = 24 - A,  D = 17 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 12 into each relation.",
        equation: "A=12, B=9, C=12, D=5"
      }
    ], "A=12, B=9, C=12, D=5 — verify in all equations."),
  },
  {
    id: 115,
    exam: 1,
    number: '1.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C - B = 5', 'A = 3 × C - 33', 'D = 2 × C - 15', 'C + 2 × D = A + 33'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 12, B: 10, C: 15, D: 15 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 33,  B = C - 5,  D = 2 × C - 15"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 2 × D = A + 33"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 15 into the relations above to get every value.",
        equation: "A=12, B=10, C=15, D=15"
      }
    ], "A=12, B=10, C=15, D=15 — verify in all equations."),
  },
  {
    id: 116,
    exam: 1,
    number: '1.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × D + C + 35 = 3 × A + 2 × B', 'C = 3 × D + 8', 'B = 3 × D - 4', 'A - D = 15'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 2, C: 14, D: 2 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 15,  B = 3 × D - 4,  C = 3 × D + 8"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + C + 35 = 3 × A + 2 × B"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 2 into the relations above to get every value.",
        equation: "A=17, B=2, C=14, D=2"
      }
    ], "A=17, B=2, C=14, D=2 — verify in all equations."),
  },
  {
    id: 117,
    exam: 1,
    number: '1.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = A + 9', 'A + 3 × B + 2 × C = 81', 'C = A + 9', 'B = A + 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 17, C: 13, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = A + 13,  C = A + 9,  D = A + 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 3 × B + 2 × C = 81"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 4"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 4 into the relations above to get every value.",
        equation: "A=4, B=17, C=13, D=13"
      }
    ], "A=4, B=17, C=13, D=13 — verify in all equations."),
  },
  {
    id: 118,
    exam: 1,
    number: '1.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² + 5 × A = 66', 'C = 2 × A - 11', 'D = 3 × A - 5', 'B = 2 × A + 5'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 17, C: 1, D: 13 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 5A = 66 → A(A + 5) = 66. Try A = 6: 6 × 11 = 66 ✓, so A = 6."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A + 5,  C = 2 × A - 11,  D = 3 × A - 5"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 6 into each relation.",
        equation: "A=6, B=17, C=1, D=13"
      }
    ], "A=6, B=17, C=1, D=13 — verify in all equations."),
  },
  {
    id: 119,
    exam: 1,
    number: '1.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × B + D = 19', 'C = B - 2', 'A - B = 10', 'D = 2 × B + 7'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 3, C: 1, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 10,  C = B - 2,  D = 2 × B + 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + D = 19"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 3 into the relations above to get every value.",
        equation: "A=13, B=3, C=1, D=13"
      }
    ], "A=13, B=3, C=1, D=13 — verify in all equations."),
  },
  {
    id: 120,
    exam: 1,
    number: '1.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - C = 3', '2 × C + 2 × B = 3 × A + D + 11', 'B + C = 31', 'A + C = 26'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 16, C: 15, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 26 - C,  B = 31 - C,  D = C + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 2 × B = 3 × A + D + 11"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 15 into the relations above to get every value.",
        equation: "A=11, B=16, C=15, D=18"
      }
    ], "A=11, B=16, C=15, D=18 — verify in all equations."),
  },
  {
    id: 201,
    exam: 2,
    number: '2.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B + A = 21', 'C - A = 1', '3 × A + 29 = 3 × B + C'],
    variables: ['A', 'B', 'C'],
    answer: { A: 7, B: 14, C: 8 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 21 - A,  C = A + 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + 29 = 3 × B + C"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 7 into the relations above to get every value.",
        equation: "A=7, B=14, C=8"
      }
    ], "A=7, B=14, C=8 — verify in all equations."),
  },
  {
    id: 202,
    exam: 2,
    number: '2.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B + 2 × A + 3 × C = 55', 'B = A - 2', 'C = B - 7'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 12, C: 5 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B + 2,  C = B - 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × A + 3 × C = 55"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 12"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 12 into the relations above to get every value.",
        equation: "A=14, B=12, C=5"
      }
    ], "A=14, B=12, C=5 — verify in all equations."),
  },
  {
    id: 203,
    exam: 2,
    number: '2.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['2 × B + 2 × A + 3 × C = 43', 'C = 2 × B - 11', 'B = A - 8'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 6, C: 1 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B + 8,  C = 2 × B - 11"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × A + 3 × C = 43"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 6 into the relations above to get every value.",
        equation: "A=14, B=6, C=1"
      }
    ], "A=14, B=6, C=1 — verify in all equations."),
  },
  {
    id: 204,
    exam: 2,
    number: '2.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A - C = 9', '2 × C + 2 × B = A + 3', 'B = C - 9'],
    variables: ['A', 'B', 'C'],
    answer: { A: 19, B: 1, C: 10 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C + 9,  B = C - 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 2 × B = A + 3"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 10 into the relations above to get every value.",
        equation: "A=19, B=1, C=10"
      }
    ], "A=19, B=1, C=10 — verify in all equations."),
  },
  {
    id: 205,
    exam: 2,
    number: '2.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + B = 20', '2 × B = 3 × A + 15', 'C + B = 32'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 15, C: 17 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 20 - B,  C = 32 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B = 3 × A + 15"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 15 into the relations above to get every value.",
        equation: "A=5, B=15, C=17"
      }
    ], "A=5, B=15, C=17 — verify in all equations."),
  },
  {
    id: 206,
    exam: 2,
    number: '2.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² = 100', 'D = 2 × A - 15', 'A - B = 3', 'C = 2 × A - 5'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 7, C: 15, D: 5 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² = 100, so A = √100 = 10 (take the positive root)."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 3,  C = 2 × A - 5,  D = 2 × A - 15"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 10 into each relation.",
        equation: "A=10, B=7, C=15, D=5"
      }
    ], "A=10, B=7, C=15, D=5 — verify in all equations."),
  },
  {
    id: 207,
    exam: 2,
    number: '2.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × C + 2 × B + D = A + 72', 'B = 2 × C - 12', 'D = 3 × C - 13', 'A + C = 12'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 1, B: 10, C: 11, D: 20 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 12 - C,  B = 2 × C - 12,  D = 3 × C - 13"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × B + D = A + 72"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 11 into the relations above to get every value.",
        equation: "A=1, B=10, C=11, D=20"
      }
    ], "A=1, B=10, C=11, D=20 — verify in all equations."),
  },
  {
    id: 208,
    exam: 2,
    number: '2.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × C + 2 × A + D + 9 = 3 × B', 'C = A - 10', 'D + C = 19', 'B - C = 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 20, C: 3, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C + 10,  B = C + 17,  D = 19 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × A + D + 9 = 3 × B"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 3 into the relations above to get every value.",
        equation: "A=13, B=20, C=3, D=16"
      }
    ], "A=13, B=20, C=3, D=16 — verify in all equations."),
  },
  {
    id: 209,
    exam: 2,
    number: '2.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = B - 1', 'D - C = 3', '3 × D = 2 × B + 2 × C', 'D = A - 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 12, B: 5, C: 1, D: 4 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 8,  B = D + 1,  C = D - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D = 2 × B + 2 × C"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 4"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 4 into the relations above to get every value.",
        equation: "A=12, B=5, C=1, D=4"
      }
    ], "A=12, B=5, C=1, D=4 — verify in all equations."),
  },
  {
    id: 210,
    exam: 2,
    number: '2.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = B - 4', 'A² + 2 × A = 8', 'C = 8 × A', 'D = 9 × A'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 2, B: 6, C: 16, D: 18 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 2A = 8 → A(A + 2) = 8. Try A = 2: 2 × 4 = 8 ✓, so A = 2."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 4,  C = 8 × A,  D = 9 × A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 2 into each relation.",
        equation: "A=2, B=6, C=16, D=18"
      }
    ], "A=2, B=6, C=16, D=18 — verify in all equations."),
  },
  {
    id: 211,
    exam: 2,
    number: '2.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - C = 15', 'C - B = 1', 'A = 3 × C - 7', 'C + 3 × A = 3 × B + 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 3, C: 4, D: 19 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 7,  B = C - 1,  D = C + 15"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 3 × A = 3 × B + 10"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 4"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 4 into the relations above to get every value.",
        equation: "A=5, B=3, C=4, D=19"
      }
    ], "A=5, B=3, C=4, D=19 — verify in all equations."),
  },
  {
    id: 212,
    exam: 2,
    number: '2.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × B + 64 = A + 2 × C + 3 × D', 'D = B + 5', 'C = B + 1', 'B = A - 3'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 11, C: 12, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 3,  C = B + 1,  D = B + 5"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 64 = A + 2 × C + 3 × D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 11 into the relations above to get every value.",
        equation: "A=14, B=11, C=12, D=16"
      }
    ], "A=14, B=11, C=12, D=16 — verify in all equations."),
  },
  {
    id: 213,
    exam: 2,
    number: '2.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = A - 14', 'A + 25 = 3 × B + C + 2 × D', 'D = 3 × A - 29', 'C = 3 × A - 40'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 15, B: 1, C: 5, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = A - 14,  C = 3 × A - 40,  D = 3 × A - 29"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 25 = 3 × B + C + 2 × D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 15 into the relations above to get every value.",
        equation: "A=15, B=1, C=5, D=16"
      }
    ], "A=15, B=1, C=5, D=16 — verify in all equations."),
  },
  {
    id: 214,
    exam: 2,
    number: '2.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - 6 × A = 91', 'D = A - 7', 'C = A - 11', 'B = 2 × A - 9'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 17, C: 2, D: 6 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - 6A = 91 → A(A - 6) = 91. Try A = 13: 13 × 7 = 91 ✓, so A = 13."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 9,  C = A - 11,  D = A - 7"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 13 into each relation.",
        equation: "A=13, B=17, C=2, D=6"
      }
    ], "A=13, B=17, C=2, D=6 — verify in all equations."),
  },
  {
    id: 215,
    exam: 2,
    number: '2.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + A = 34', 'C - A = 4', 'A + 3 × B = C + 11', 'B = 2 × A - 23'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 5, C: 18, D: 20 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 2 × A - 23,  C = A + 4,  D = 34 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 3 × B = C + 11"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 14 into the relations above to get every value.",
        equation: "A=14, B=5, C=18, D=20"
      }
    ], "A=14, B=5, C=18, D=20 — verify in all equations."),
  },
  {
    id: 216,
    exam: 2,
    number: '2.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + 11 = A + D', 'D = 3 × B - 30', 'A = B + 5', 'C + B = 30'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 12, C: 18, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 5,  C = 30 - B,  D = 3 × B - 30"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 11 = A + D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 12"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 12 into the relations above to get every value.",
        equation: "A=17, B=12, C=18, D=6"
      }
    ], "A=17, B=12, C=18, D=6 — verify in all equations."),
  },
  {
    id: 217,
    exam: 2,
    number: '2.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = D - 6', 'D + 3 × A + 3 × C = 2 × B + 76', 'B + D = 37', 'D = A - 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 20, B: 19, C: 12, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 2,  B = 37 - D,  C = D - 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + 3 × A + 3 × C = 2 × B + 76"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 18"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 18 into the relations above to get every value.",
        equation: "A=20, B=19, C=12, D=18"
      }
    ], "A=20, B=19, C=12, D=18 — verify in all equations."),
  },
  {
    id: 218,
    exam: 2,
    number: '2.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A - B = 4', 'C + A = 23', 'A = D - 5', '5 × (A² + A) = 660'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 7, C: 12, D: 16 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 5: A² + A = 132 → A(A + 1) = 132. 11 × 12 = 132, so A = 11."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 4,  C = 23 - A,  D = A + 5"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 11 into each relation.",
        equation: "A=11, B=7, C=12, D=16"
      }
    ], "A=11, B=7, C=12, D=16 — verify in all equations."),
  },
  {
    id: 219,
    exam: 2,
    number: '2.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × A + 2 × C + D = 2 × B + 26', 'D + A = 19', 'C + A = 26', 'B = 3 × A - 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 19, C: 19, D: 12 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 3 × A - 2,  C = 26 - A,  D = 19 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 2 × C + D = 2 × B + 26"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 7 into the relations above to get every value.",
        equation: "A=7, B=19, C=19, D=12"
      }
    ], "A=7, B=19, C=19, D=12 — verify in all equations."),
  },
  {
    id: 220,
    exam: 2,
    number: '2.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × B + 3 × C + 3 × D = A + 52', 'D = B ÷ 2', 'A = 3 × B - 7', 'B = C - 6'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 6, C: 12, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 7,  C = B + 6,  D = B ÷ 2"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 3 × C + 3 × D = A + 52"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 6 into the relations above to get every value.",
        equation: "A=11, B=6, C=12, D=3"
      }
    ], "A=11, B=6, C=12, D=3 — verify in all equations."),
  },
  {
    id: 301,
    exam: 3,
    number: '3.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['3 × B = 3 × C + 21', 'A + B = 31', 'C = 2 × B - 20'],
    variables: ['A', 'B', 'C'],
    answer: { A: 18, B: 13, C: 6 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 31 - B,  C = 2 × B - 20"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B = 3 × C + 21"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 13 into the relations above to get every value.",
        equation: "A=18, B=13, C=6"
      }
    ], "A=18, B=13, C=6 — verify in all equations."),
  },
  {
    id: 302,
    exam: 3,
    number: '3.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['2 × C + 2 × A + 3 × B = 74', 'B = C - 4', 'A = 2 × C - 20'],
    variables: ['A', 'B', 'C'],
    answer: { A: 8, B: 10, C: 14 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 2 × C - 20,  B = C - 4"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 2 × A + 3 × B = 74"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 14 into the relations above to get every value.",
        equation: "A=8, B=10, C=14"
      }
    ], "A=8, B=10, C=14 — verify in all equations."),
  },
  {
    id: 303,
    exam: 3,
    number: '3.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B + 2 × C = 2 × A + 37', 'C = B + 10', 'A = 3 × B - 22'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 9, C: 19 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 3 × B - 22,  C = B + 10"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × C = 2 × A + 37"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 9 into the relations above to get every value.",
        equation: "A=5, B=9, C=19"
      }
    ], "A=5, B=9, C=19 — verify in all equations."),
  },
  {
    id: 304,
    exam: 3,
    number: '3.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C = 3 × A', 'C + B = 5', 'B + C = 5'],
    variables: ['A', 'B', 'C'],
    answer: { A: 1, B: 2, C: 3 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C ÷ 3,  B = 5 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + B = 5"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 3 into the relations above to get every value.",
        equation: "A=1, B=2, C=3"
      }
    ], "A=1, B=2, C=3 — verify in all equations."),
  },
  {
    id: 305,
    exam: 3,
    number: '3.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B = C + 10', 'A = 2 × C - 6', 'C + 3 × B = 3 × A + 34'],
    variables: ['A', 'B', 'C'],
    answer: { A: 8, B: 17, C: 7 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 2 × C - 6,  B = C + 10"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 3 × B = 3 × A + 34"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 7 into the relations above to get every value.",
        equation: "A=8, B=17, C=7"
      }
    ], "A=8, B=17, C=7 — verify in all equations."),
  },
  {
    id: 306,
    exam: 3,
    number: '3.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B - A = 4', 'A² - A = 30', 'C = A - 3', 'D - A = 9'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 10, C: 3, D: 15 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - A = 30 → A(A - 1) = 30. Two consecutive numbers with product 30: 6 × 5 = 30, so A = 6."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 4,  C = A - 3,  D = A + 9"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 6 into each relation.",
        equation: "A=6, B=10, C=3, D=15"
      }
    ], "A=6, B=10, C=3, D=15 — verify in all equations."),
  },
  {
    id: 307,
    exam: 3,
    number: '3.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × B + 4', 'B = D - 3', 'C = 3 × B - 5', 'B + 2 × C + 8 = A + D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 3, C: 4, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B + 4,  C = 3 × B - 5,  D = B + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × C + 8 = A + D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 3 into the relations above to get every value.",
        equation: "A=13, B=3, C=4, D=6"
      }
    ], "A=13, B=3, C=4, D=6 — verify in all equations."),
  },
  {
    id: 308,
    exam: 3,
    number: '3.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = 3 × B - 40', 'D + B = 30', 'A = B - 6', '3 × B + 2 × C + 3 × D = 2 × A + 90'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 17, C: 11, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B - 6,  C = 3 × B - 40,  D = 30 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 2 × C + 3 × D = 2 × A + 90"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 17"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 17 into the relations above to get every value.",
        equation: "A=11, B=17, C=11, D=13"
      }
    ], "A=11, B=17, C=11, D=13 — verify in all equations."),
  },
  {
    id: 309,
    exam: 3,
    number: '3.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × C + 8', '3 × C + 2 × B + 3 × D = 2 × A + 48', 'A = C', 'B + C = 7'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 2, B: 5, C: 2, D: 12 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C,  B = 7 - C,  D = 2 × C + 8"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × B + 3 × D = 2 × A + 48"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 2 into the relations above to get every value.",
        equation: "A=2, B=5, C=2, D=12"
      }
    ], "A=2, B=5, C=2, D=12 — verify in all equations."),
  },
  {
    id: 310,
    exam: 3,
    number: '3.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - 7 × A = 78', 'D + A = 22', 'C = 2 × A - 11', 'B = 3 × A - 33'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 6, C: 15, D: 9 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - 7A = 78 → A(A - 7) = 78. Try A = 13: 13 × 6 = 78 ✓, so A = 13."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 3 × A - 33,  C = 2 × A - 11,  D = 22 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 13 into each relation.",
        equation: "A=13, B=6, C=15, D=9"
      }
    ], "A=13, B=6, C=15, D=9 — verify in all equations."),
  },
  {
    id: 311,
    exam: 3,
    number: '3.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = A + 7', 'C + A = 15', '3 × A + 25 = C + 3 × D', 'B = 2 × A - 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 9, C: 4, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 2 × A - 13,  C = 15 - A,  D = A + 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + 25 = C + 3 × D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 11 into the relations above to get every value.",
        equation: "A=11, B=9, C=4, D=18"
      }
    ], "A=11, B=9, C=4, D=18 — verify in all equations."),
  },
  {
    id: 312,
    exam: 3,
    number: '3.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × D + A = 48', 'D - A = 4', 'B = 2 × D - 15', 'C - D = 6'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 11, C: 19, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D - 4,  B = 2 × D - 15,  C = D + 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + A = 48"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 13 into the relations above to get every value.",
        equation: "A=9, B=11, C=19, D=13"
      }
    ], "A=9, B=11, C=19, D=13 — verify in all equations."),
  },
  {
    id: 313,
    exam: 3,
    number: '3.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × C - 29', '2 × C + 3 × D = A + B + 62', 'D = 2 × C - 6', 'B = 2 × C - 12'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 14, C: 13, D: 20 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 29,  B = 2 × C - 12,  D = 2 × C - 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 3 × D = A + B + 62"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 13 into the relations above to get every value.",
        equation: "A=10, B=14, C=13, D=20"
      }
    ], "A=10, B=14, C=13, D=20 — verify in all equations."),
  },
  {
    id: 314,
    exam: 3,
    number: '3.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 25', 'B = 2 × A - 1', 'D = 2 × A - 6', '5 × (A² + A) = 450'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 17, C: 16, D: 12 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 5: A² + A = 90 → A(A + 1) = 90. 9 × 10 = 90, so A = 9."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 1,  C = 25 - A,  D = 2 × A - 6"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 9 into each relation.",
        equation: "A=9, B=17, C=16, D=12"
      }
    ], "A=9, B=17, C=16, D=12 — verify in all equations."),
  },
  {
    id: 315,
    exam: 3,
    number: '3.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × D + 2 × A + C = B + 40', 'C = 3 × D - 10', 'A + D = 18', 'B = 2 × D - 5'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 13, C: 17, D: 9 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 18 - D,  B = 2 × D - 5,  C = 3 × D - 10"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + 2 × A + C = B + 40"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 9 into the relations above to get every value.",
        equation: "A=9, B=13, C=17, D=9"
      }
    ], "A=9, B=13, C=17, D=9 — verify in all equations."),
  },
  {
    id: 316,
    exam: 3,
    number: '3.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C - A = 1', 'C + 2 × A + B = 2 × D + 14', 'C = 17 × B', 'D + C = 35'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 16, B: 1, C: 17, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C - 1,  B = C ÷ 17,  D = 35 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 2 × A + B = 2 × D + 14"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 17"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 17 into the relations above to get every value.",
        equation: "A=16, B=1, C=17, D=18"
      }
    ], "A=16, B=1, C=17, D=18 — verify in all equations."),
  },
  {
    id: 317,
    exam: 3,
    number: '3.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C - D = 1', '3 × C + 2 × A + 2 × B = D + 113', 'A + C = 38', 'B + C = 37'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 19, B: 18, C: 19, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 38 - C,  B = 37 - C,  D = C - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × A + 2 × B = D + 113"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 19"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 19 into the relations above to get every value.",
        equation: "A=19, B=18, C=19, D=18"
      }
    ], "A=19, B=18, C=19, D=18 — verify in all equations."),
  },
  {
    id: 318,
    exam: 3,
    number: '3.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + A = 5', 'C - A = 11', 'A² + 2 × A = 24', 'A = D - 5'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 1, C: 15, D: 9 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 2A = 24 → A(A + 2) = 24. Try A = 4: 4 × 6 = 24 ✓, so A = 4."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 5 - A,  C = A + 11,  D = A + 5"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 4 into each relation.",
        equation: "A=4, B=1, C=15, D=9"
      }
    ], "A=4, B=1, C=15, D=9 — verify in all equations."),
  },
  {
    id: 319,
    exam: 3,
    number: '3.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = C - 8', 'D = 16 × B', '3 × B + 2 × A + 3 × C + 3 × D = 98', 'A = 2 × B + 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 1, C: 9, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 2 × B + 8,  C = B + 8,  D = 16 × B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 2 × A + 3 × C + 3 × D = 98"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 1"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 1 into the relations above to get every value.",
        equation: "A=10, B=1, C=9, D=16"
      }
    ], "A=10, B=1, C=9, D=16 — verify in all equations."),
  },
  {
    id: 320,
    exam: 3,
    number: '3.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 5 × B', 'B = D - 15', 'B = C - 17', 'B + D + 11 = 3 × A'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 2, C: 19, D: 17 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 5 × B,  C = B + 17,  D = B + 15"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + D + 11 = 3 × A"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 2 into the relations above to get every value.",
        equation: "A=10, B=2, C=19, D=17"
      }
    ], "A=10, B=2, C=19, D=17 — verify in all equations."),
  },
  {
    id: 401,
    exam: 4,
    number: '4.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + 79 = 3 × B + 2 × C', 'B + A = 23', 'C - A = 10'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 18, C: 15 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 23 - A,  C = A + 10"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 79 = 3 × B + 2 × C"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 5 into the relations above to get every value.",
        equation: "A=5, B=18, C=15"
      }
    ], "A=5, B=18, C=15 — verify in all equations."),
  },
  {
    id: 402,
    exam: 4,
    number: '4.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B - A = 6', 'B = C - 3', 'B + 2 × A + 3 × C = 87'],
    variables: ['A', 'B', 'C'],
    answer: { A: 9, B: 15, C: 18 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B - 6,  C = B + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × A + 3 × C = 87"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 15 into the relations above to get every value.",
        equation: "A=9, B=15, C=18"
      }
    ], "A=9, B=15, C=18 — verify in all equations."),
  },
  {
    id: 403,
    exam: 4,
    number: '4.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + 3 × B + 2 × C = 47', 'C = 3 × A + 17', 'B = 2 × A'],
    variables: ['A', 'B', 'C'],
    answer: { A: 1, B: 2, C: 20 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 2 × A,  C = 3 × A + 17"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 3 × B + 2 × C = 47"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 1"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 1 into the relations above to get every value.",
        equation: "A=1, B=2, C=20"
      }
    ], "A=1, B=2, C=20 — verify in all equations."),
  },
  {
    id: 404,
    exam: 4,
    number: '4.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C + A = 21', '2 × A + 23 = B + 3 × C', 'A = B - 8'],
    variables: ['A', 'B', 'C'],
    answer: { A: 12, B: 20, C: 9 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A + 8,  C = 21 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 23 = B + 3 × C"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 12"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 12 into the relations above to get every value.",
        equation: "A=12, B=20, C=9"
      }
    ], "A=12, B=20, C=9 — verify in all equations."),
  },
  {
    id: 405,
    exam: 4,
    number: '4.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C - B = 4', 'B = A - 3', '3 × B + A = 47'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 11, C: 15 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B + 3,  C = B + 4"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + A = 47"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 11 into the relations above to get every value.",
        equation: "A=14, B=11, C=15"
      }
    ], "A=14, B=11, C=15 — verify in all equations."),
  },
  {
    id: 406,
    exam: 4,
    number: '4.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - A = 1', 'A² - A = 2', 'C + A = 10', 'B = 3 × A + 7'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 2, B: 13, C: 8, D: 3 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - A = 2 → A(A - 1) = 2. Two consecutive numbers with product 2: 2 × 1 = 2, so A = 2."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 3 × A + 7,  C = 10 - A,  D = A + 1"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 2 into each relation.",
        equation: "A=2, B=13, C=8, D=3"
      }
    ], "A=2, B=13, C=8, D=3 — verify in all equations."),
  },
  {
    id: 407,
    exam: 4,
    number: '4.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × B + 11', 'D + B = 5', 'C = B + 11', '3 × B + 3 × C = A + 3 × D + 19'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 2, C: 13, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B + 11,  C = B + 11,  D = 5 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 3 × C = A + 3 × D + 19"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 2 into the relations above to get every value.",
        equation: "A=17, B=2, C=13, D=3"
      }
    ], "A=17, B=2, C=13, D=3 — verify in all equations."),
  },
  {
    id: 408,
    exam: 4,
    number: '4.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = 3 × B - 20', '2 × B + A + C + D = 67', 'A = 3 × B - 13', 'D - B = 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 10, C: 10, D: 20 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 13,  C = 3 × B - 20,  D = B + 10"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + A + C + D = 67"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 10 into the relations above to get every value.",
        equation: "A=17, B=10, C=10, D=20"
      }
    ], "A=17, B=10, C=10, D=20 — verify in all equations."),
  },
  {
    id: 409,
    exam: 4,
    number: '4.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × A + 44 = 3 × B + C + 2 × D', 'D + A = 16', 'C - A = 14', 'B + A = 11'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 6, C: 19, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 11 - A,  C = A + 14,  D = 16 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + 44 = 3 × B + C + 2 × D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 5 into the relations above to get every value.",
        equation: "A=5, B=6, C=19, D=11"
      }
    ], "A=5, B=6, C=19, D=11 — verify in all equations."),
  },
  {
    id: 410,
    exam: 4,
    number: '4.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - A = 10', '5 × (A² + A) = 280', 'C = 3 × A - 4', 'B = A'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 7, C: 17, D: 17 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 5: A² + A = 56 → A(A + 1) = 56. 7 × 8 = 56, so A = 7."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A,  C = 3 × A - 4,  D = A + 10"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 7 into each relation.",
        equation: "A=7, B=7, C=17, D=17"
      }
    ], "A=7, B=7, C=17, D=17 — verify in all equations."),
  },
  {
    id: 411,
    exam: 4,
    number: '4.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D - B = 3', 'A + B = 19', 'C = B + 4', '3 × B + 2 × C + D = 53'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 12, B: 7, C: 11, D: 10 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 19 - B,  C = B + 4,  D = B + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 2 × C + D = 53"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 7 into the relations above to get every value.",
        equation: "A=12, B=7, C=11, D=10"
      }
    ], "A=12, B=7, C=11, D=10 — verify in all equations."),
  },
  {
    id: 412,
    exam: 4,
    number: '4.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × A - 3', 'B = 3 × A + 2', '3 × A = 3 × D', 'C = A + 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 3, B: 11, C: 20, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 3 × A + 2,  C = A + 17,  D = 2 × A - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A = 3 × D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 3 into the relations above to get every value.",
        equation: "A=3, B=11, C=20, D=3"
      }
    ], "A=3, B=11, C=20, D=3 — verify in all equations."),
  },
  {
    id: 413,
    exam: 4,
    number: '4.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 2 × D - 27', 'B = 3 × D - 35', '2 × D + 2 × C = 3 × A + 3 × B + 8', 'C + D = 31'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 13, C: 15, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 2 × D - 27,  B = 3 × D - 35,  C = 31 - D"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + 2 × C = 3 × A + 3 × B + 8"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 16 into the relations above to get every value.",
        equation: "A=5, B=13, C=15, D=16"
      }
    ], "A=5, B=13, C=15, D=16 — verify in all equations."),
  },
  {
    id: 414,
    exam: 4,
    number: '4.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 25', 'A² = 64', 'B = 3 × A - 19', 'A = D - 12'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 8, B: 5, C: 17, D: 20 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² = 64, so A = √64 = 8 (take the positive root)."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 3 × A - 19,  C = 25 - A,  D = A + 12"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 8 into each relation.",
        equation: "A=8, B=5, C=17, D=20"
      }
    ], "A=8, B=5, C=17, D=20 — verify in all equations."),
  },
  {
    id: 415,
    exam: 4,
    number: '4.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = D - 5', 'D = B - 4', 'D = 9 × A', 'D + 8 = B + C'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 1, B: 13, C: 4, D: 9 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D ÷ 9,  B = D + 4,  C = D - 5"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + 8 = B + C"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 9 into the relations above to get every value.",
        equation: "A=1, B=13, C=4, D=9"
      }
    ], "A=1, B=13, C=4, D=9 — verify in all equations."),
  },
  {
    id: 416,
    exam: 4,
    number: '4.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × C - 32', '3 × C + 3 × B = A + 77', 'A = C ÷ 2', 'C - B = 11'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 9, C: 20, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C ÷ 2,  B = C - 11,  D = 2 × C - 32"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 3 × B = A + 77"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 20 into the relations above to get every value.",
        equation: "A=10, B=9, C=20, D=8"
      }
    ], "A=10, B=9, C=20, D=8 — verify in all equations."),
  },
  {
    id: 417,
    exam: 4,
    number: '4.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + C = 19', 'D - C = 9', '3 × C + 2 × A + 19 = 3 × D', 'A = 2 × C - 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 13, C: 6, D: 15 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 2 × C - 8,  B = 19 - C,  D = C + 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × A + 19 = 3 × D"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 6 into the relations above to get every value.",
        equation: "A=4, B=13, C=6, D=15"
      }
    ], "A=4, B=13, C=6, D=15 — verify in all equations."),
  },
  {
    id: 418,
    exam: 4,
    number: '4.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A - D = 4', 'A = 7 × B', 'C = 2 × A + 1', 'A² + 3 × A = 70'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 1, C: 15, D: 3 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 3A = 70 → A(A + 3) = 70. Try A = 7: 7 × 10 = 70 ✓, so A = 7."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A ÷ 7,  C = 2 × A + 1,  D = A - 4"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 7 into each relation.",
        equation: "A=7, B=1, C=15, D=3"
      }
    ], "A=7, B=1, C=15, D=3 — verify in all equations."),
  },
  {
    id: 419,
    exam: 4,
    number: '4.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B - D = 1', 'B + A + 31 = 2 × C + D', 'C = 3 × B + 9', 'A = 2 × B - 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 3, C: 18, D: 2 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 2 × B - 2,  C = 3 × B + 9,  D = B - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + A + 31 = 2 × C + D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 3 into the relations above to get every value.",
        equation: "A=4, B=3, C=18, D=2"
      }
    ], "A=4, B=3, C=18, D=2 — verify in all equations."),
  },
  {
    id: 420,
    exam: 4,
    number: '4.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × D - 45', '2 × D + A = 2 × C + 29', 'B = D - 14', 'D - C = 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 3, B: 2, C: 3, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 3 × D - 45,  B = D - 14,  C = D - 13"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + A = 2 × C + 29"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 16 into the relations above to get every value.",
        equation: "A=3, B=2, C=3, D=16"
      }
    ], "A=3, B=2, C=3, D=16 — verify in all equations."),
  },
  {
    id: 501,
    exam: 5,
    number: '5.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + C = 21', '3 × C + 2 × B = 2 × A + 30', 'B = 2 × C - 9'],
    variables: ['A', 'B', 'C'],
    answer: { A: 11, B: 11, C: 10 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 21 - C,  B = 2 × C - 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × B = 2 × A + 30"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 10 into the relations above to get every value.",
        equation: "A=11, B=11, C=10"
      }
    ], "A=11, B=11, C=10 — verify in all equations."),
  },
  {
    id: 502,
    exam: 5,
    number: '5.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B - A = 6', '2 × B = 3 × C + 13', 'C = 3 × B - 51'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 20, C: 9 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B - 6,  C = 3 × B - 51"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B = 3 × C + 13"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 20 into the relations above to get every value.",
        equation: "A=14, B=20, C=9"
      }
    ], "A=14, B=20, C=9 — verify in all equations."),
  },
  {
    id: 503,
    exam: 5,
    number: '5.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C - A = 12', 'C - B = 9', 'C + 3 × A = 24'],
    variables: ['A', 'B', 'C'],
    answer: { A: 3, B: 6, C: 15 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C - 12,  B = C - 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 3 × A = 24"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 15 into the relations above to get every value.",
        equation: "A=3, B=6, C=15"
      }
    ], "A=3, B=6, C=15 — verify in all equations."),
  },
  {
    id: 504,
    exam: 5,
    number: '5.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + 2 × C = B + 3', 'B = 2 × A - 20', 'C = A - 18'],
    variables: ['A', 'B', 'C'],
    answer: { A: 19, B: 18, C: 1 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 2 × A - 20,  C = A - 18"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 2 × C = B + 3"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 19"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 19 into the relations above to get every value.",
        equation: "A=19, B=18, C=1"
      }
    ], "A=19, B=18, C=1 — verify in all equations."),
  },
  {
    id: 505,
    exam: 5,
    number: '5.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['3 × A + B + C = 59', 'B = A + 6', 'C + A = 23'],
    variables: ['A', 'B', 'C'],
    answer: { A: 10, B: 16, C: 13 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A + 6,  C = 23 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + B + C = 59"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 10 into the relations above to get every value.",
        equation: "A=10, B=16, C=13"
      }
    ], "A=10, B=16, C=13 — verify in all equations."),
  },
  {
    id: 506,
    exam: 5,
    number: '5.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 23', 'B - A = 13', 'A = D - 12', '3 × (A² + A) = 126'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 19, C: 17, D: 18 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 3: A² + A = 42 → A(A + 1) = 42. 6 × 7 = 42, so A = 6."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 13,  C = 23 - A,  D = A + 12"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 6 into each relation.",
        equation: "A=6, B=19, C=17, D=18"
      }
    ], "A=6, B=19, C=17, D=18 — verify in all equations."),
  },
  {
    id: 507,
    exam: 5,
    number: '5.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + 22 = 3 × D', 'D - B = 6', 'C = B + 14', 'B = A - 6'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 8, B: 2, C: 16, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 6,  C = B + 14,  D = B + 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 22 = 3 × D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 2 into the relations above to get every value.",
        equation: "A=8, B=2, C=16, D=8"
      }
    ], "A=8, B=2, C=16, D=8 — verify in all equations."),
  },
  {
    id: 508,
    exam: 5,
    number: '5.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C - D = 9', 'D = A - 13', '3 × D + 3 × A = 2 × B + C + 41', 'B = D - 1'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 16, B: 2, C: 12, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 13,  B = D - 1,  C = D + 9"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + 3 × A = 2 × B + C + 41"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 3 into the relations above to get every value.",
        equation: "A=16, B=2, C=12, D=3"
      }
    ], "A=16, B=2, C=12, D=3 — verify in all equations."),
  },
  {
    id: 509,
    exam: 5,
    number: '5.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + B = 15', 'C = 3 × B + 4', 'B + 2 × D + 36 = 3 × A + 2 × C', 'A = 3 × B + 14'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 1, C: 7, D: 14 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B + 14,  C = 3 × B + 4,  D = 15 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × D + 36 = 3 × A + 2 × C"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 1"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 1 into the relations above to get every value.",
        equation: "A=17, B=1, C=7, D=14"
      }
    ], "A=17, B=1, C=7, D=14 — verify in all equations."),
  },
  {
    id: 510,
    exam: 5,
    number: '5.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + A = 18', 'C + A = 21', 'B = 2 × A - 11', 'A² = 100'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 9, C: 11, D: 8 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² = 100, so A = √100 = 10 (take the positive root)."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 11,  C = 21 - A,  D = 18 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 10 into each relation.",
        equation: "A=10, B=9, C=11, D=8"
      }
    ], "A=10, B=9, C=11, D=8 — verify in all equations."),
  },
  {
    id: 511,
    exam: 5,
    number: '5.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = A - 8', '3 × A + B = D + 46', 'B = 2 × A - 26', 'C = 2 × A - 28'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 16, B: 6, C: 4, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 2 × A - 26,  C = 2 × A - 28,  D = A - 8"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + B = D + 46"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 16 into the relations above to get every value.",
        equation: "A=16, B=6, C=4, D=8"
      }
    ], "A=16, B=6, C=4, D=8 — verify in all equations."),
  },
  {
    id: 512,
    exam: 5,
    number: '5.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = D + 6', 'A = 3 × D - 25', 'C = 2 × D - 13', '2 × D + A + 3 × B = 3 × C + 58'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 19, C: 13, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 3 × D - 25,  B = D + 6,  C = 2 × D - 13"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + A + 3 × B = 3 × C + 58"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 13 into the relations above to get every value.",
        equation: "A=14, B=19, C=13, D=13"
      }
    ], "A=14, B=19, C=13, D=13 — verify in all equations."),
  },
  {
    id: 513,
    exam: 5,
    number: '5.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 3 × A - 43', 'A = 2 × B', 'C = 3 × A - 32', '2 × A + 37 = 2 × B + 3 × C + D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 16, B: 8, C: 16, D: 5 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = A ÷ 2,  C = 3 × A - 32,  D = 3 × A - 43"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 37 = 2 × B + 3 × C + D"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 16 into the relations above to get every value.",
        equation: "A=16, B=8, C=16, D=5"
      }
    ], "A=16, B=8, C=16, D=5 — verify in all equations."),
  },
  {
    id: 514,
    exam: 5,
    number: '5.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - A = 72', 'D = 2 × A - 13', 'C = A + 1', 'B + A = 14'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 5, C: 10, D: 5 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - A = 72 → A(A - 1) = 72. Two consecutive numbers with product 72: 9 × 8 = 72, so A = 9."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 14 - A,  C = A + 1,  D = 2 × A - 13"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 9 into each relation.",
        equation: "A=9, B=5, C=10, D=5"
      }
    ], "A=9, B=5, C=10, D=5 — verify in all equations."),
  },
  {
    id: 515,
    exam: 5,
    number: '5.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = 3 × C - 18', 'C + 18 = 3 × A', 'A = 2 × C - 9', 'D = C - 3'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 9, C: 9, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 2 × C - 9,  B = 3 × C - 18,  D = C - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 18 = 3 × A"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 9 into the relations above to get every value.",
        equation: "A=9, B=9, C=9, D=6"
      }
    ], "A=9, B=9, C=9, D=6 — verify in all equations."),
  },
  {
    id: 516,
    exam: 5,
    number: '5.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = 2 × D - 28', 'C = D - 13', 'A = D + 2', '3 × D + 3 × B = A + 2 × C + 36'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 18, B: 4, C: 3, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 2,  B = 2 × D - 28,  C = D - 13"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + 3 × B = A + 2 × C + 36"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 16"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 16 into the relations above to get every value.",
        equation: "A=18, B=4, C=3, D=16"
      }
    ], "A=18, B=4, C=3, D=16 — verify in all equations."),
  },
  {
    id: 517,
    exam: 5,
    number: '5.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = A - 17', 'B - C = 4', 'D = 2 × C + 12', '3 × C + 34 = B + 2 × D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 20, B: 7, C: 3, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C + 17,  B = C + 4,  D = 2 × C + 12"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 34 = B + 2 × D"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 3 into the relations above to get every value.",
        equation: "A=20, B=7, C=3, D=18"
      }
    ], "A=20, B=7, C=3, D=18 — verify in all equations."),
  },
  {
    id: 518,
    exam: 5,
    number: '5.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × (A² + A) = 220', 'D + A = 23', 'A - C = 4', 'A = B - 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 20, C: 6, D: 13 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 2: A² + A = 110 → A(A + 1) = 110. 10 × 11 = 110, so A = 10."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 10,  C = A - 4,  D = 23 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 10 into each relation.",
        equation: "A=10, B=20, C=6, D=13"
      }
    ], "A=10, B=20, C=6, D=13 — verify in all equations."),
  },
  {
    id: 519,
    exam: 5,
    number: '5.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = D - 1', 'A + B + 2 × C + 3 × D = 83', 'C = A - 12', 'B + A = 34'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 20, C: 2, D: 15 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 34 - A,  C = A - 12,  D = A + 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + B + 2 × C + 3 × D = 83"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 14 into the relations above to get every value.",
        equation: "A=14, B=20, C=2, D=15"
      }
    ], "A=14, B=20, C=2, D=15 — verify in all equations."),
  },
  {
    id: 520,
    exam: 5,
    number: '5.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × B = A + C + 38', 'A + B = 25', 'D = 3 × B - 41', 'C = 2 × B - 27'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 18, C: 9, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 25 - B,  C = 2 × B - 27,  D = 3 × B - 41"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B = A + C + 38"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 18"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 18 into the relations above to get every value.",
        equation: "A=7, B=18, C=9, D=13"
      }
    ], "A=7, B=18, C=9, D=13 — verify in all equations."),
  },
  {
    id: 601,
    exam: 6,
    number: '6.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['2 × A + C = 3 × B + 28', 'B = A - 12', 'C + A = 28'],
    variables: ['A', 'B', 'C'],
    answer: { A: 18, B: 6, C: 10 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A - 12,  C = 28 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + C = 3 × B + 28"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 18"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 18 into the relations above to get every value.",
        equation: "A=18, B=6, C=10"
      }
    ], "A=18, B=6, C=10 — verify in all equations."),
  },
  {
    id: 602,
    exam: 6,
    number: '6.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B + 34 = A + 2 × C', 'C - B = 14', 'A = B ÷ 2'],
    variables: ['A', 'B', 'C'],
    answer: { A: 2, B: 4, C: 18 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B ÷ 2,  C = B + 14"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 34 = A + 2 × C"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 4"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 4 into the relations above to get every value.",
        equation: "A=2, B=4, C=18"
      }
    ], "A=2, B=4, C=18 — verify in all equations."),
  },
  {
    id: 603,
    exam: 6,
    number: '6.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['3 × B + C = 3 × A + 34', 'C + B = 24', 'B - A = 7'],
    variables: ['A', 'B', 'C'],
    answer: { A: 4, B: 11, C: 13 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = B - 7,  C = 24 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + C = 3 × A + 34"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 11 into the relations above to get every value.",
        equation: "A=4, B=11, C=13"
      }
    ], "A=4, B=11, C=13 — verify in all equations."),
  },
  {
    id: 604,
    exam: 6,
    number: '6.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A + B = 23', '3 × B + C + 1 = A', 'C = 3 × B - 6'],
    variables: ['A', 'B', 'C'],
    answer: { A: 19, B: 4, C: 6 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 23 - B,  C = 3 × B - 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + C + 1 = A"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 4"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 4 into the relations above to get every value.",
        equation: "A=19, B=4, C=6"
      }
    ], "A=19, B=4, C=6 — verify in all equations."),
  },
  {
    id: 605,
    exam: 6,
    number: '6.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C = A + 3', 'B = 3 × A - 26', '2 × A + C = 45'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 16, C: 17 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 3 × A - 26,  C = A + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + C = 45"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 14 into the relations above to get every value.",
        equation: "A=14, B=16, C=17"
      }
    ], "A=14, B=16, C=17 — verify in all equations."),
  },
  {
    id: 606,
    exam: 6,
    number: '6.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 16', 'D + A = 17', 'A² + A = 20', 'A - B = 1'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 3, C: 12, D: 13 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + A = 20 → A(A + 1) = 20. Find two consecutive numbers whose product is 20: 4 × 5 = 20, so A = 4."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 1,  C = 16 - A,  D = 17 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 4 into each relation.",
        equation: "A=4, B=3, C=12, D=13"
      }
    ], "A=4, B=3, C=12, D=13 — verify in all equations."),
  },
  {
    id: 607,
    exam: 6,
    number: '6.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × B + 25 = A + 3 × D', 'A = 3 × B - 31', 'D + B = 28', 'C + B = 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 14, C: 3, D: 14 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 31,  C = 17 - B,  D = 28 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 25 = A + 3 × D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 14 into the relations above to get every value.",
        equation: "A=11, B=14, C=3, D=14"
      }
    ], "A=11, B=14, C=3, D=14 — verify in all equations."),
  },
  {
    id: 608,
    exam: 6,
    number: '6.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B - A = 4', 'D = 3 × B - 27', 'B + 11 = 2 × C', 'C = 3 × B - 22'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 11, C: 11, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B - 4,  C = 3 × B - 22,  D = 3 × B - 27"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 11 = 2 × C"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 11"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 11 into the relations above to get every value.",
        equation: "A=7, B=11, C=11, D=6"
      }
    ], "A=7, B=11, C=11, D=6 — verify in all equations."),
  },
  {
    id: 609,
    exam: 6,
    number: '6.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + 2 × A + C = 3 × B + 49', 'B = 2 × D - 4', 'C = 3 × D + 3', 'A = 2 × D + 14'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 20, B: 2, C: 12, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 2 × D + 14,  B = 2 × D - 4,  C = 3 × D + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + 2 × A + C = 3 × B + 49"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 3 into the relations above to get every value.",
        equation: "A=20, B=2, C=12, D=3"
      }
    ], "A=20, B=2, C=12, D=3 — verify in all equations."),
  },
  {
    id: 610,
    exam: 6,
    number: '6.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × A - 9', 'B + A = 13', 'C = 3 × A - 11', 'A² + 4 × A = 77'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 6, C: 10, D: 5 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 4A = 77 → A(A + 4) = 77. Try A = 7: 7 × 11 = 77 ✓, so A = 7."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 13 - A,  C = 3 × A - 11,  D = 2 × A - 9"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 7 into each relation.",
        equation: "A=7, B=6, C=10, D=5"
      }
    ], "A=7, B=6, C=10, D=5 — verify in all equations."),
  },
  {
    id: 611,
    exam: 6,
    number: '6.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × D + 2 × A + C = 2 × B + 42', 'B + D = 34', 'A = 3 × D - 47', 'C = D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 4, B: 17, C: 17, D: 17 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 3 × D - 47,  B = 34 - D,  C = D"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + 2 × A + C = 2 × B + 42"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 17"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 17 into the relations above to get every value.",
        equation: "A=4, B=17, C=17, D=17"
      }
    ], "A=4, B=17, C=17, D=17 — verify in all equations."),
  },
  {
    id: 612,
    exam: 6,
    number: '6.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 3 × B - 29', 'B = A - 2', '2 × B + 69 = 3 × A + 3 × D', 'B = C - 4'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 15, C: 19, D: 16 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 2,  C = B + 4,  D = 3 × B - 29"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 69 = 3 × A + 3 × D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 15 into the relations above to get every value.",
        equation: "A=17, B=15, C=19, D=16"
      }
    ], "A=17, B=15, C=19, D=16 — verify in all equations."),
  },
  {
    id: 613,
    exam: 6,
    number: '6.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A + C = 25', 'B + C = 10', '3 × C + 19 = 2 × A + 2 × B + 2 × D', 'C - D = 3'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 16, B: 1, C: 9, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 25 - C,  B = 10 - C,  D = C - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 19 = 2 × A + 2 × B + 2 × D"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 9 into the relations above to get every value.",
        equation: "A=16, B=1, C=9, D=6"
      }
    ], "A=16, B=1, C=9, D=6 — verify in all equations."),
  },
  {
    id: 614,
    exam: 6,
    number: '6.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - A = 20', 'B = 2 × A - 2', 'D = 3 × A - 1', 'C = A + 14'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 8, C: 19, D: 14 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - A = 20 → A(A - 1) = 20. Two consecutive numbers with product 20: 5 × 4 = 20, so A = 5."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 2 × A - 2,  C = A + 14,  D = 3 × A - 1"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 5 into each relation.",
        equation: "A=5, B=8, C=19, D=14"
      }
    ], "A=5, B=8, C=19, D=14 — verify in all equations."),
  },
  {
    id: 615,
    exam: 6,
    number: '6.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = C ÷ 3', 'B = 3 × C - 26', 'D + C = 26', '3 × C + 2 × D = A + 62'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 19, C: 15, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C ÷ 3,  B = 3 × C - 26,  D = 26 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × D = A + 62"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 15 into the relations above to get every value.",
        equation: "A=5, B=19, C=15, D=11"
      }
    ], "A=5, B=19, C=15, D=11 — verify in all equations."),
  },
  {
    id: 616,
    exam: 6,
    number: '6.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × B + A + 3 × D = 58', 'A = B - 2', 'D = 3 × B - 19', 'C - B = 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 9, C: 17, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B - 2,  C = B + 8,  D = 3 × B - 19"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + A + 3 × D = 58"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 9 into the relations above to get every value.",
        equation: "A=7, B=9, C=17, D=8"
      }
    ], "A=7, B=9, C=17, D=8 — verify in all equations."),
  },
  {
    id: 617,
    exam: 6,
    number: '6.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + C = 18', 'D = 2 × C - 2', 'A = C + 1', '3 × C + 2 × A + D = 35'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 13, C: 5, D: 8 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C + 1,  B = 18 - C,  D = 2 × C - 2"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × A + D = 35"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 5 into the relations above to get every value.",
        equation: "A=6, B=13, C=5, D=8"
      }
    ], "A=6, B=13, C=5, D=8 — verify in all equations."),
  },
  {
    id: 618,
    exam: 6,
    number: '6.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = A - 5', 'B - A = 5', '5 × (A² + A) = 550', 'D = 2 × A - 12'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 15, C: 5, D: 8 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 5: A² + A = 110 → A(A + 1) = 110. 10 × 11 = 110, so A = 10."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 5,  C = A - 5,  D = 2 × A - 12"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 10 into each relation.",
        equation: "A=10, B=15, C=5, D=8"
      }
    ], "A=10, B=15, C=5, D=8 — verify in all equations."),
  },
  {
    id: 619,
    exam: 6,
    number: '6.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = D - 4', '2 × C + A + 2 × D = 3 × B + 21', 'A = 3 × C - 33', 'B = C + 2'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 15, C: 13, D: 17 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 33,  B = C + 2,  D = C + 4"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + A + 2 × D = 3 × B + 21"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 13 into the relations above to get every value.",
        equation: "A=6, B=15, C=13, D=17"
      }
    ], "A=6, B=15, C=13, D=17 — verify in all equations."),
  },
  {
    id: 620,
    exam: 6,
    number: '6.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + B = 17', 'D = B - 1', '2 × B + 2 × A = 2 × D + 36', 'A = 3 × B - 22'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 17, B: 13, C: 4, D: 12 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 22,  C = 17 - B,  D = B - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × A = 2 × D + 36"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 13 into the relations above to get every value.",
        equation: "A=17, B=13, C=4, D=12"
      }
    ], "A=17, B=13, C=4, D=12 — verify in all equations."),
  },
  {
    id: 701,
    exam: 7,
    number: '7.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A - C = 1', 'C + 2 × B = 3 × A + 11', 'B = 2 × C + 1'],
    variables: ['A', 'B', 'C'],
    answer: { A: 7, B: 13, C: 6 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C + 1,  B = 2 × C + 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 2 × B = 3 × A + 11"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 6 into the relations above to get every value.",
        equation: "A=7, B=13, C=6"
      }
    ], "A=7, B=13, C=6 — verify in all equations."),
  },
  {
    id: 702,
    exam: 7,
    number: '7.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C - A = 18', 'B = 2 × A + 18', '3 × A + B = 23'],
    variables: ['A', 'B', 'C'],
    answer: { A: 1, B: 20, C: 19 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 2 × A + 18,  C = A + 18"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "3 × A + B = 23"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 1"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 1 into the relations above to get every value.",
        equation: "A=1, B=20, C=19"
      }
    ], "A=1, B=20, C=19 — verify in all equations."),
  },
  {
    id: 703,
    exam: 7,
    number: '7.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A = C + 5', '2 × C + 2 × A + 6 = 3 × B', 'B - C = 6'],
    variables: ['A', 'B', 'C'],
    answer: { A: 7, B: 8, C: 2 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C + 5,  B = C + 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C + 2 × A + 6 = 3 × B"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 2 into the relations above to get every value.",
        equation: "A=7, B=8, C=2"
      }
    ], "A=7, B=8, C=2 — verify in all equations."),
  },
  {
    id: 704,
    exam: 7,
    number: '7.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A = C - 9', 'C + 3 × A = 2 × B + 15', 'B = C - 7'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 7, C: 14 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = C - 9,  B = C - 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 3 × A = 2 × B + 15"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 14 into the relations above to get every value.",
        equation: "A=5, B=7, C=14"
      }
    ], "A=5, B=7, C=14 — verify in all equations."),
  },
  {
    id: 705,
    exam: 7,
    number: '7.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A = 3 × B - 12', '2 × B + 2 × C = 3 × A + 3', 'C = B + 1'],
    variables: ['A', 'B', 'C'],
    answer: { A: 9, B: 7, C: 8 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 3 × B - 12,  C = B + 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × C = 3 × A + 3"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 7 into the relations above to get every value.",
        equation: "A=9, B=7, C=8"
      }
    ], "A=9, B=7, C=8 — verify in all equations."),
  },
  {
    id: 706,
    exam: 7,
    number: '7.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = A - 4', 'A² + A = 90', 'C = 2 × A - 7', 'D = 2 × A - 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 9, B: 5, C: 11, D: 10 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + A = 90 → A(A + 1) = 90. Find two consecutive numbers whose product is 90: 9 × 10 = 90, so A = 9."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 4,  C = 2 × A - 7,  D = 2 × A - 8"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 9 into each relation.",
        equation: "A=9, B=5, C=11, D=10"
      }
    ], "A=9, B=5, C=11, D=10 — verify in all equations."),
  },
  {
    id: 707,
    exam: 7,
    number: '7.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × C - 3', 'B + C = 25', '3 × C + A + D = B + 25', 'A = 3 × C - 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 18, C: 7, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 10,  B = 25 - C,  D = 2 × C - 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + A + D = B + 25"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 7"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 7 into the relations above to get every value.",
        equation: "A=11, B=18, C=7, D=11"
      }
    ], "A=11, B=18, C=7, D=11 — verify in all equations."),
  },
  {
    id: 708,
    exam: 7,
    number: '7.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B - A = 1', 'D + B = 9', 'C + B = 19', 'B + 2 × A + 2 × C = 42'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 6, C: 13, D: 3 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B - 1,  C = 19 - B,  D = 9 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 2 × A + 2 × C = 42"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 6 into the relations above to get every value.",
        equation: "A=5, B=6, C=13, D=3"
      }
    ], "A=5, B=6, C=13, D=3 — verify in all equations."),
  },
  {
    id: 709,
    exam: 7,
    number: '7.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × C + 2 × D = A + 3 × B + 13', 'C - D = 12', 'A = C + 2', 'B + C = 29'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 20, B: 11, C: 18, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C + 2,  B = 29 - C,  D = C - 12"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 2 × D = A + 3 × B + 13"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 18"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 18 into the relations above to get every value.",
        equation: "A=20, B=11, C=18, D=6"
      }
    ], "A=20, B=11, C=18, D=6 — verify in all equations."),
  },
  {
    id: 710,
    exam: 7,
    number: '7.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + A = 10', 'C = 3 × A - 14', 'A = B - 6', '3 × (A² + A) = 168'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 13, C: 7, D: 3 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 3: A² + A = 56 → A(A + 1) = 56. 7 × 8 = 56, so A = 7."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A + 6,  C = 3 × A - 14,  D = 10 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 7 into each relation.",
        equation: "A=7, B=13, C=7, D=3"
      }
    ], "A=7, B=13, C=7, D=3 — verify in all equations."),
  },
  {
    id: 711,
    exam: 7,
    number: '7.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = C - 5', 'D = 3 × C - 43', 'C + 2 × A + D = 2 × B + 53', 'C - B = 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 1, C: 18, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C - 5,  B = C - 17,  D = 3 × C - 43"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 2 × A + D = 2 × B + 53"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 18"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 18 into the relations above to get every value.",
        equation: "A=13, B=1, C=18, D=11"
      }
    ], "A=13, B=1, C=18, D=11 — verify in all equations."),
  },
  {
    id: 712,
    exam: 7,
    number: '7.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × B + 2 × A + 2 × C = D + 66', 'C + B = 17', 'D + B = 16', 'A - B = 9'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 19, B: 10, C: 7, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = B + 9,  C = 17 - B,  D = 16 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × A + 2 × C = D + 66"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 10 into the relations above to get every value.",
        equation: "A=19, B=10, C=7, D=6"
      }
    ], "A=19, B=10, C=7, D=6 — verify in all equations."),
  },
  {
    id: 713,
    exam: 7,
    number: '7.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 3 × A - 51', 'C + A = 21', '2 × A = 3 × C + 3 × D + 10', 'B = 3 × A - 56'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 20, B: 4, C: 1, D: 9 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 3 × A - 56,  C = 21 - A,  D = 3 × A - 51"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A = 3 × C + 3 × D + 10"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 20 into the relations above to get every value.",
        equation: "A=20, B=4, C=1, D=9"
      }
    ], "A=20, B=4, C=1, D=9 — verify in all equations."),
  },
  {
    id: 714,
    exam: 7,
    number: '7.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² + 3 × A = 18', 'A = C - 10', 'D = 3 × A', 'B + A = 8'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 3, B: 5, C: 13, D: 9 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + 3A = 18 → A(A + 3) = 18. Try A = 3: 3 × 6 = 18 ✓, so A = 3."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 8 - A,  C = A + 10,  D = 3 × A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 3 into each relation.",
        equation: "A=3, B=5, C=13, D=9"
      }
    ], "A=3, B=5, C=13, D=9 — verify in all equations."),
  },
  {
    id: 715,
    exam: 7,
    number: '7.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × B + 2 × D + 7 = A + 3 × C', 'D = B - 4', 'C = B - 2', 'A = 3 × B - 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 9, C: 7, D: 5 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 3 × B - 13,  C = B - 2,  D = B - 4"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × D + 7 = A + 3 × C"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 9 into the relations above to get every value.",
        equation: "A=14, B=9, C=7, D=5"
      }
    ], "A=14, B=9, C=7, D=5 — verify in all equations."),
  },
  {
    id: 716,
    exam: 7,
    number: '7.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A + 5 = B + 2 × D', 'A = 2 × C - 16', 'C - D = 8', 'B = 3 × C - 21'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 18, C: 13, D: 5 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 2 × C - 16,  B = 3 × C - 21,  D = C - 8"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + A + 5 = B + 2 × D"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 13 into the relations above to get every value.",
        equation: "A=10, B=18, C=13, D=5"
      }
    ], "A=10, B=18, C=13, D=5 — verify in all equations."),
  },
  {
    id: 717,
    exam: 7,
    number: '7.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 3 × C + 8', 'C = A - 3', '3 × C + B = 16', 'C = B - 4'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 7, C: 3, D: 17 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C + 3,  B = C + 4,  D = 3 × C + 8"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + B = 16"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 3"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 3 into the relations above to get every value.",
        equation: "A=6, B=7, C=3, D=17"
      }
    ], "A=6, B=7, C=3, D=17 — verify in all equations."),
  },
  {
    id: 718,
    exam: 7,
    number: '7.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² - 2 × A = 3', 'D = 2 × A + 9', 'C + A = 18', 'B + A = 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 3, B: 7, C: 15, D: 15 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² - 2A = 3 → A(A - 2) = 3. Try A = 3: 3 × 1 = 3 ✓, so A = 3."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 10 - A,  C = 18 - A,  D = 2 × A + 9"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 3 into each relation.",
        equation: "A=3, B=7, C=15, D=15"
      }
    ], "A=3, B=7, C=15, D=15 — verify in all equations."),
  },
  {
    id: 719,
    exam: 7,
    number: '7.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D = 2 × C - 30', '2 × C = A + 3 × D + 4', 'B = 2 × C - 24', 'A = 2 × C - 34'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 16, C: 20, D: 10 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 2 × C - 34,  B = 2 × C - 24,  D = 2 × C - 30"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "2 × C = A + 3 × D + 4"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 20 into the relations above to get every value.",
        equation: "A=6, B=16, C=20, D=10"
      }
    ], "A=6, B=16, C=20, D=10 — verify in all equations."),
  },
  {
    id: 720,
    exam: 7,
    number: '7.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + D = 18', 'B + D = 14', '3 × D + 2 × A + C = 3 × B + 40', 'A + D = 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 4, C: 8, D: 10 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = 17 - D,  B = 14 - D,  C = 18 - D"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "3 × D + 2 × A + C = 3 × B + 40"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 10 into the relations above to get every value.",
        equation: "A=7, B=4, C=8, D=10"
      }
    ], "A=7, B=4, C=8, D=10 — verify in all equations."),
  },
  {
    id: 801,
    exam: 8,
    number: '8.1',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C + B = 19', '2 × B + 2 × A = 2 × C + 30', 'A = 2 × B + 2'],
    variables: ['A', 'B', 'C'],
    answer: { A: 18, B: 8, C: 11 },
    xp: 20,
    hint: "2 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "2 of the equations let you write A, C using B:",
        equation: "A = 2 × B + 2,  C = 19 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "2 × B + 2 × A = 2 × C + 30"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 8"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 8 into the relations above to get every value.",
        equation: "A=18, B=8, C=11"
      }
    ], "A=18, B=8, C=11 — verify in all equations."),
  },
  {
    id: 802,
    exam: 8,
    number: '8.2',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A = 3 × C - 38', 'B + C = 26', '3 × C = B + 26'],
    variables: ['A', 'B', 'C'],
    answer: { A: 1, B: 13, C: 13 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 3 × C - 38,  B = 26 - C"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C = B + 26"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 13 into the relations above to get every value.",
        equation: "A=1, B=13, C=13"
      }
    ], "A=1, B=13, C=13 — verify in all equations."),
  },
  {
    id: 803,
    exam: 8,
    number: '8.3',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['A = 7 × C', 'B = 2 × C + 16', '3 × C + 22 = 2 × A'],
    variables: ['A', 'B', 'C'],
    answer: { A: 14, B: 20, C: 2 },
    xp: 20,
    hint: "2 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "2 of the equations let you write A, B using C:",
        equation: "A = 7 × C,  B = 2 × C + 16"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "3 × C + 22 = 2 × A"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 2 into the relations above to get every value.",
        equation: "A=14, B=20, C=2"
      }
    ], "A=14, B=20, C=2 — verify in all equations."),
  },
  {
    id: 804,
    exam: 8,
    number: '8.4',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['C - A = 18', '2 × A + 34 = 2 × B', 'B + A = 21'],
    variables: ['A', 'B', 'C'],
    answer: { A: 2, B: 19, C: 20 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = 21 - A,  C = A + 18"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 34 = 2 × B"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 2"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 2 into the relations above to get every value.",
        equation: "A=2, B=19, C=20"
      }
    ], "A=2, B=19, C=20 — verify in all equations."),
  },
  {
    id: 805,
    exam: 8,
    number: '8.5',
    difficulty: 'medium',
    chapterId: 2,
    equations: ['B = A - 3', 'C + A = 25', 'A + 2 × C = 3 × B + 39'],
    variables: ['A', 'B', 'C'],
    answer: { A: 5, B: 2, C: 20 },
    xp: 20,
    hint: "2 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "2 of the equations let you write B, C using A:",
        equation: "B = A - 3,  C = 25 - A"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 2 × C = 3 × B + 39"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 5"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 5 into the relations above to get every value.",
        equation: "A=5, B=2, C=20"
      }
    ], "A=5, B=2, C=20 — verify in all equations."),
  },
  {
    id: 806,
    exam: 8,
    number: '8.6',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A² + A = 132', 'D + A = 24', 'A = C - 5', 'A - B = 10'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 1, C: 16, D: 13 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² + A = 132 → A(A + 1) = 132. Find two consecutive numbers whose product is 132: 11 × 12 = 132, so A = 11."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 10,  C = A + 5,  D = 24 - A"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 11 into each relation.",
        equation: "A=11, B=1, C=16, D=13"
      }
    ], "A=11, B=1, C=16, D=13 — verify in all equations."),
  },
  {
    id: 807,
    exam: 8,
    number: '8.7',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['D + B = 16', 'A + B = 18', '3 × B + 14 = 2 × C + 2 × D', 'C = 2 × B - 4'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 8, B: 10, C: 16, D: 6 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 18 - B,  C = 2 × B - 4,  D = 16 - B"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 14 = 2 × C + 2 × D"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 10"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 10 into the relations above to get every value.",
        equation: "A=8, B=10, C=16, D=6"
      }
    ], "A=8, B=10, C=16, D=6 — verify in all equations."),
  },
  {
    id: 808,
    exam: 8,
    number: '8.8',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C - A = 14', 'C + 3 × B = 3 × A + 2 × D + 21', 'B = 2 × C - 31', 'C - D = 16'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 6, B: 9, C: 20, D: 4 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = C - 14,  B = 2 × C - 31,  D = C - 16"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 3 × B = 3 × A + 2 × D + 21"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 20"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 20 into the relations above to get every value.",
        equation: "A=6, B=9, C=20, D=4"
      }
    ], "A=6, B=9, C=20, D=4 — verify in all equations."),
  },
  {
    id: 809,
    exam: 8,
    number: '8.9',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['2 × D + A = B + C + 15', 'A = D - 4', 'C = D - 1', 'D - B = 1'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 13, B: 16, C: 16, D: 17 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D - 4,  B = D - 1,  C = D - 1"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "2 × D + A = B + C + 15"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 17"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 17 into the relations above to get every value.",
        equation: "A=13, B=16, C=16, D=17"
      }
    ], "A=13, B=16, C=16, D=17 — verify in all equations."),
  },
  {
    id: 810,
    exam: 8,
    number: '8.10',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['4 × (A² + A) = 120', 'D = A + 8', 'C = 2 × A + 9', 'A - B = 1'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 5, B: 4, C: 19, D: 13 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 4: A² + A = 30 → A(A + 1) = 30. 5 × 6 = 30, so A = 5."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A - 1,  C = 2 × A + 9,  D = A + 8"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 5 into each relation.",
        equation: "A=5, B=4, C=19, D=13"
      }
    ], "A=5, B=4, C=19, D=13 — verify in all equations."),
  },
  {
    id: 811,
    exam: 8,
    number: '8.11',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = D - 3', 'A = C - 4', 'A + 10 = 3 × B + C', 'B = 3 × A - 43'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 15, B: 2, C: 19, D: 18 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = 3 × A - 43,  C = A + 4,  D = A + 3"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "A + 10 = 3 × B + C"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 15"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 15 into the relations above to get every value.",
        equation: "A=15, B=2, C=19, D=18"
      }
    ], "A=15, B=2, C=19, D=18 — verify in all equations."),
  },
  {
    id: 812,
    exam: 8,
    number: '8.12',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C = 2 × B - 1', 'A = 2 × B - 11', 'B = D - 6', 'B + 3 × D = 3 × A + 2 × C + 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 1, B: 6, C: 11, D: 12 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 2 × B - 11,  C = 2 × B - 1,  D = B + 6"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 3 × D = 3 × A + 2 × C + 17"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 6"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 6 into the relations above to get every value.",
        equation: "A=1, B=6, C=11, D=12"
      }
    ], "A=1, B=6, C=11, D=12 — verify in all equations."),
  },
  {
    id: 813,
    exam: 8,
    number: '8.13',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = D - 3', 'B + D = 30', 'D + A + 3 × B = C + 65', 'C = 3 × D - 30'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 17, C: 9, D: 13 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D - 3,  B = 30 - D,  C = 3 × D - 30"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + A + 3 × B = C + 65"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 13"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 13 into the relations above to get every value.",
        equation: "A=10, B=17, C=9, D=13"
      }
    ], "A=10, B=17, C=9, D=13 — verify in all equations."),
  },
  {
    id: 814,
    exam: 8,
    number: '8.14',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['4 × (A² + A) = 224', 'C = 3 × A - 2', 'B = 3 × A - 7', 'D = 3 × A - 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 7, B: 14, C: 19, D: 4 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "Divide both sides by 4: A² + A = 56 → A(A + 1) = 56. 7 × 8 = 56, so A = 7."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = 3 × A - 7,  C = 3 × A - 2,  D = 3 × A - 17"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 7 into each relation.",
        equation: "A=7, B=14, C=19, D=4"
      }
    ], "A=7, B=14, C=19, D=4 — verify in all equations."),
  },
  {
    id: 815,
    exam: 8,
    number: '8.15',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = A - 11', 'D = A - 7', '2 × A + 2 × C = 3 × B + D + 34', 'C = 2 × A - 17'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 14, B: 3, C: 11, D: 7 },
    xp: 30,
    hint: "3 equations define the other letters in terms of A. Substitute them into the remaining equation and solve for A.",
    solution: createSolution([
      {
        title: "Express every variable in terms of A",
        content: "3 of the equations let you write B, C, D using A:",
        equation: "B = A - 11,  C = 2 × A - 17,  D = A - 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in A.",
        equation: "2 × A + 2 × C = 3 × B + D + 34"
      },
      {
        title: "Solve for A",
        content: "Simplify and solve the one-variable equation.",
        equation: "A = 14"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug A = 14 into the relations above to get every value.",
        equation: "A=14, B=3, C=11, D=7"
      }
    ], "A=14, B=3, C=11, D=7 — verify in all equations."),
  },
  {
    id: 816,
    exam: 8,
    number: '8.16',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B = D ÷ 3', 'D + 2 × C = 45', 'D = A - 6', 'C = 2 × D'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 15, B: 3, C: 18, D: 9 },
    xp: 30,
    hint: "3 equations define the other letters in terms of D. Substitute them into the remaining equation and solve for D.",
    solution: createSolution([
      {
        title: "Express every variable in terms of D",
        content: "3 of the equations let you write A, B, C using D:",
        equation: "A = D + 6,  B = D ÷ 3,  C = 2 × D"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in D.",
        equation: "D + 2 × C = 45"
      },
      {
        title: "Solve for D",
        content: "Simplify and solve the one-variable equation.",
        equation: "D = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug D = 9 into the relations above to get every value.",
        equation: "A=15, B=3, C=18, D=9"
      }
    ], "A=15, B=3, C=18, D=9 — verify in all equations."),
  },
  {
    id: 817,
    exam: 8,
    number: '8.17',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['3 × B + 2 × D = A + 49', 'D = 2 × B - 12', 'B - C = 2', 'A = 2 × B - 13'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 11, B: 12, C: 10, D: 12 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 2 × B - 13,  C = B - 2,  D = 2 × B - 12"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "3 × B + 2 × D = A + 49"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 12"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 12 into the relations above to get every value.",
        equation: "A=11, B=12, C=10, D=12"
      }
    ], "A=11, B=12, C=10, D=12 — verify in all equations."),
  },
  {
    id: 818,
    exam: 8,
    number: '8.18',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['C + A = 25', 'A² = 100', 'D = A - 3', 'A = 5 × B'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 10, B: 2, C: 15, D: 7 },
    xp: 35,
    hint: "One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.",
    solution: createSolution([
      {
        title: "Solve the quadratic for A first",
        content: "One equation involves only A. Solve it — keep the natural-number (positive) root.",
        equation: "A² = 100, so A = √100 = 10 (take the positive root)."
      },
      {
        title: "Use A to express the rest",
        content: "The other equations give B, C, D directly from A:",
        equation: "B = A ÷ 5,  C = 25 - A,  D = A - 3"
      },
      {
        title: "Back-substitute",
        content: "Plug A = 10 into each relation.",
        equation: "A=10, B=2, C=15, D=7"
      }
    ], "A=10, B=2, C=15, D=7 — verify in all equations."),
  },
  {
    id: 819,
    exam: 8,
    number: '8.19',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['A = 3 × C - 15', 'B = C - 5', 'C + 31 = 2 × A + 3 × B + 2 × D', 'D = C - 7'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 12, B: 4, C: 9, D: 2 },
    xp: 30,
    hint: "3 equations define the other letters in terms of C. Substitute them into the remaining equation and solve for C.",
    solution: createSolution([
      {
        title: "Express every variable in terms of C",
        content: "3 of the equations let you write A, B, D using C:",
        equation: "A = 3 × C - 15,  B = C - 5,  D = C - 7"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in C.",
        equation: "C + 31 = 2 × A + 3 × B + 2 × D"
      },
      {
        title: "Solve for C",
        content: "Simplify and solve the one-variable equation.",
        equation: "C = 9"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug C = 9 into the relations above to get every value.",
        equation: "A=12, B=4, C=9, D=2"
      }
    ], "A=12, B=4, C=9, D=2 — verify in all equations."),
  },
  {
    id: 820,
    exam: 8,
    number: '8.20',
    difficulty: 'hard',
    chapterId: 3,
    equations: ['B + 20 = 2 × C', 'D = 3 × B - 25', 'C = 3 × B - 20', 'A + B = 15'],
    variables: ['A', 'B', 'C', 'D'],
    answer: { A: 3, B: 12, C: 16, D: 11 },
    xp: 30,
    hint: "3 equations define the other letters in terms of B. Substitute them into the remaining equation and solve for B.",
    solution: createSolution([
      {
        title: "Express every variable in terms of B",
        content: "3 of the equations let you write A, C, D using B:",
        equation: "A = 15 - B,  C = 3 × B - 20,  D = 3 × B - 25"
      },
      {
        title: "Substitute into the remaining equation",
        content: "Put those expressions into the equation that mixes everything together, leaving a single equation in B.",
        equation: "B + 20 = 2 × C"
      },
      {
        title: "Solve for B",
        content: "Simplify and solve the one-variable equation.",
        equation: "B = 12"
      },
      {
        title: "Back-substitute for the rest",
        content: "Plug B = 12 into the relations above to get every value.",
        equation: "A=3, B=12, C=16, D=11"
      }
    ], "A=3, B=12, C=16, D=11 — verify in all equations."),
  }
];

export function getMathLevelsByExam(exam) {
  return mathLevels.filter(l => l.exam === exam);
}

export function getMathLevelsByDifficulty(difficulty) {
  return mathLevels.filter(l => l.difficulty === difficulty);
}
