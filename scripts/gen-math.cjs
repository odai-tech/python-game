/* eslint-disable */
// One-off generator for TestAS math question bank.
// Produces only MEDIUM (3 eq / 3 var) and HARD (4 eq / 4 var or quadratic) questions.
// Every final answer is a whole number 1-20, and every question is verified to have
// EXACTLY ONE solution in the 1-20 cube by brute force.
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src', 'mathLevels.js');
const original = fs.readFileSync(SRC, 'utf8');

// ---- reuse the existing mental-math strategies block verbatim ----
const stratStart = original.indexOf('// Mental Math Strategies Guide');
const stratEnd = original.indexOf('// Helper function to create detailed solution steps');
const strategiesBlock = original.slice(stratStart, stratEnd).trimEnd();

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// compile an equation string into a fast boolean test fn(A,B,C,D)
function compile(eq) {
  const [lhs, rhs] = eq.split('=');
  const conv = (s) =>
    s
      .replace(/²/g, '**2')
      .replace(/³/g, '**3')
      .replace(/⁴/g, '**4')
      .replace(/⁰/g, '**0')
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
  // eslint-disable-next-line no-new-func
  return new Function('A', 'B', 'C', 'D', `return Math.abs((${conv(lhs)})-(${conv(rhs)}))<1e-9;`);
}

// brute force every assignment in 1..20 for the listed variables.
// returns array of solutions (each {A,B,C,...})
function solve(equations, vars) {
  const fns = equations.map(compile);
  const sols = [];
  const vals = { A: 0, B: 0, C: 0, D: 0 };
  const rec = (i) => {
    if (i === vars.length) {
      for (const f of fns) if (!f(vals.A, vals.B, vals.C, vals.D)) return;
      sols.push({ ...vals });
      return;
    }
    const v = vars[i];
    for (let n = 1; n <= 20; n++) {
      vals[v] = n;
      rec(i + 1);
      if (sols.length > 1) return; // early out, not unique
    }
  };
  rec(0);
  return sols;
}

// term display: coeff*var ->  "V" | "m × V"
const term = (c, v) => (c === 1 ? v : `${c} × ${v}`);

// ---------------------------------------------------------------------------
// link builder: equation that expresses Y purely in terms of `base`.
// returns { eq, rel } where rel is the isolated "Y = f(base)" relation used
// in the written solution.  Picks a random valid form for the given values.
// ---------------------------------------------------------------------------
function makeLink(Y, base, yVal, baseVal) {
  const forms = [];
  const k = yVal - baseVal;
  const s = yVal + baseVal;

  if (k > 0) {
    forms.push({ eq: `${Y} = ${base} + ${k}`, rel: `${Y} = ${base} + ${k}` });
    forms.push({ eq: `${Y} - ${base} = ${k}`, rel: `${Y} = ${base} + ${k}` });
    forms.push({ eq: `${base} = ${Y} - ${k}`, rel: `${Y} = ${base} + ${k}` });
  } else if (k < 0) {
    forms.push({ eq: `${Y} = ${base} - ${-k}`, rel: `${Y} = ${base} - ${-k}` });
    forms.push({ eq: `${base} - ${Y} = ${-k}`, rel: `${Y} = ${base} - ${-k}` });
  } else {
    forms.push({ eq: `${Y} = ${base}`, rel: `${Y} = ${base}` });
  }

  // sum form is always valid
  forms.push({ eq: `${Y} + ${base} = ${s}`, rel: `${Y} = ${s} - ${base}` });

  // multiple
  if (baseVal !== 0 && yVal % baseVal === 0 && yVal / baseVal >= 2) {
    const m = yVal / baseVal;
    forms.push({ eq: `${Y} = ${m} × ${base}`, rel: `${Y} = ${m} × ${base}` });
  }
  if (yVal !== 0 && baseVal % yVal === 0 && baseVal / yVal >= 2) {
    const m = baseVal / yVal;
    forms.push({ eq: `${base} = ${m} × ${Y}`, rel: `${Y} = ${base} ÷ ${m}` });
  }
  // division of base
  for (let d = 2; d <= 6; d++) {
    if (baseVal % d === 0 && baseVal / d === yVal) {
      forms.push({ eq: `${Y} = ${base} ÷ ${d}`, rel: `${Y} = ${base} ÷ ${d}` });
    }
  }
  // linear  Y = m*base + k
  for (const m of [2, 3]) {
    const kk = yVal - m * baseVal;
    if (kk > 0) forms.push({ eq: `${Y} = ${m} × ${base} + ${kk}`, rel: `${Y} = ${m} × ${base} + ${kk}` });
    else if (kk < 0) forms.push({ eq: `${Y} = ${m} × ${base} - ${-kk}`, rel: `${Y} = ${m} × ${base} - ${-kk}` });
  }

  return pick(forms);
}

// ---------------------------------------------------------------------------
// combination equation tying `base` together with the other vars.
// vars: full list, vals: solution. base must appear with nonzero coefficient.
// ---------------------------------------------------------------------------
function makeCombo(vars, vals, base) {
  for (let attempt = 0; attempt < 200; attempt++) {
    const left = {};
    const right = {};
    // base always on the left with coeff 1..3
    left[base] = rnd(1, 3);
    let varTerms = 1;
    for (const v of vars) {
      if (v === base) continue;
      const r = Math.random();
      if (r < 0.4) {
        left[v] = rnd(1, 3);
        varTerms++;
      } else if (r < 0.8) {
        right[v] = rnd(1, 3);
        varTerms++;
      }
    }
    if (varTerms < 2) continue; // need a real combination

    const leftVal = Object.entries(left).reduce((s, [v, c]) => s + c * vals[v], 0);
    const rightVal = Object.entries(right).reduce((s, [v, c]) => s + c * vals[v], 0);
    const constant = leftVal - rightVal; // left = right + constant

    const leftStr = Object.entries(left).map(([v, c]) => term(c, v));
    const rightStr = Object.entries(right).map(([v, c]) => term(c, v));

    let L = leftStr.join(' + ');
    let R = rightStr.join(' + ');

    if (constant > 0) {
      R = R ? `${R} + ${constant}` : `${constant}`;
    } else if (constant < 0) {
      L = `${L} + ${-constant}`;
    } else if (!R) {
      continue; // would be "L = 0", skip
    }
    return `${L} = ${R}`;
  }
  return null;
}

// ---------------------------------------------------------------------------
// quadratic-in-A builder.  Returns { eq, rel, steps } where A is uniquely
// determined (the other root is negative / out of 1..20).
// ---------------------------------------------------------------------------
function makeQuadratic(a) {
  const forms = [];
  // A² + A = c   (other root -(a+1))
  forms.push(() => {
    const c = a * a + a;
    return {
      eq: `A² + A = ${c}`,
      explain: `A² + A = ${c} → A(A + 1) = ${c}. Find two consecutive numbers whose product is ${c}: ${a} × ${a + 1} = ${c}, so A = ${a}.`,
    };
  });
  // A² - A = c  (a >= 2, other root negative)
  if (a >= 2) {
    forms.push(() => {
      const c = a * a - a;
      return {
        eq: `A² - A = ${c}`,
        explain: `A² - A = ${c} → A(A - 1) = ${c}. Two consecutive numbers with product ${c}: ${a} × ${a - 1} = ${c}, so A = ${a}.`,
      };
    });
  }
  // A² = c  (perfect square)
  forms.push(() => {
    const c = a * a;
    return {
      eq: `A² = ${c}`,
      explain: `A² = ${c}, so A = √${c} = ${a} (take the positive root).`,
    };
  });
  // n × (A² + A) = N
  forms.push(() => {
    const n = rnd(2, 5);
    const c = a * a + a;
    return {
      eq: `${n} × (A² + A) = ${n * c}`,
      explain: `Divide both sides by ${n}: A² + A = ${c} → A(A + 1) = ${c}. ${a} × ${a + 1} = ${c}, so A = ${a}.`,
    };
  });
  // A² + p×A = c   (factorable, other root negative)
  if (a >= 2) {
    forms.push(() => {
      const p = rnd(1, 5);
      const c = a * a + p * a;
      return {
        eq: `A² + ${p} × A = ${c}`,
        explain: `A² + ${p}A = ${c} → A(A + ${p}) = ${c}. Try A = ${a}: ${a} × ${a + p} = ${c} ✓, so A = ${a}.`,
      };
    });
  }
  // A² - p×A = c  (other root negative when p < a... ensure positive unique)
  forms.push(() => {
    const p = rnd(1, Math.max(1, a - 1));
    const c = a * a - p * a;
    return {
      eq: `A² - ${p} × A = ${c}`,
      explain: `A² - ${p}A = ${c} → A(A - ${p}) = ${c}. Try A = ${a}: ${a} × ${a - p} = ${c} ✓, so A = ${a}.`,
    };
  });

  return pick(forms)();
}

// ---------------------------------------------------------------------------
// build one question
// ---------------------------------------------------------------------------
function buildLinear(vars) {
  // choose a base variable; every other var links to it; one combo equation
  for (let attempt = 0; attempt < 400; attempt++) {
    const vals = {};
    for (const v of vars) vals[v] = rnd(1, 20);
    const base = pick(vars);

    const links = [];
    const rels = [];
    let ok = true;
    for (const v of vars) {
      if (v === base) continue;
      const L = makeLink(v, base, vals[v], vals[base]);
      if (!L) { ok = false; break; }
      links.push(L.eq);
      rels.push(L.rel);
    }
    if (!ok) continue;

    const combo = makeCombo(vars, vals, base);
    if (!combo) continue;

    const equations = shuffle([...links, combo]);

    const sols = solve(equations, vars);
    if (sols.length !== 1) continue;
    if (vars.some((v) => sols[0][v] !== vals[v])) continue;

    return { equations, vals, base, rels, combo, type: 'linear' };
  }
  return null;
}

function buildQuadratic(vars) {
  // vars always include A as the quadratic variable
  for (let attempt = 0; attempt < 400; attempt++) {
    const aVal = rnd(2, 13);
    const vals = { A: aVal };
    for (const v of vars) if (v !== 'A') vals[v] = rnd(1, 20);

    const q = makeQuadratic(aVal);
    const links = [];
    const rels = [];
    let ok = true;
    for (const v of vars) {
      if (v === 'A') continue;
      const L = makeLink(v, 'A', vals[v], aVal);
      if (!L) { ok = false; break; }
      links.push(L.eq);
      rels.push(L.rel);
    }
    if (!ok) continue;

    const equations = shuffle([q.eq, ...links]);
    const sols = solve(equations, vars);
    if (sols.length !== 1) continue;
    if (vars.some((v) => sols[0][v] !== vals[v])) continue;

    return { equations, vals, base: 'A', rels, quad: q, type: 'quadratic' };
  }
  return null;
}

// ---------------------------------------------------------------------------
// solution-step builders (match the existing createSolution shape)
// ---------------------------------------------------------------------------
function valStr(vars, vals) {
  return vars.map((v) => `${v}=${vals[v]}`).join(', ');
}

function linearSolution(q, vars) {
  const { base, rels, combo, vals } = q;
  const others = vars.filter((v) => v !== base);
  const steps = [
    {
      title: `Express every variable in terms of ${base}`,
      content: `${others.length} of the equations let you write ${others.join(', ')} using ${base}:`,
      equation: rels.join(',  '),
    },
    {
      title: 'Substitute into the remaining equation',
      content: `Put those expressions into the equation that mixes everything together, leaving a single equation in ${base}.`,
      equation: combo,
    },
    {
      title: `Solve for ${base}`,
      content: `Simplify and solve the one-variable equation.`,
      equation: `${base} = ${vals[base]}`,
    },
    {
      title: 'Back-substitute for the rest',
      content: `Plug ${base} = ${vals[base]} into the relations above to get every value.`,
      equation: valStr(vars, vals),
    },
  ];
  return { steps, check: valStr(vars, vals) + ' — verify in all equations.' };
}

function quadraticSolution(q, vars) {
  const { quad, rels, vals } = q;
  const others = vars.filter((v) => v !== 'A');
  const steps = [
    {
      title: 'Solve the quadratic for A first',
      content: 'One equation involves only A. Solve it — keep the natural-number (positive) root.',
      equation: quad.explain,
    },
    {
      title: 'Use A to express the rest',
      content: `The other equations give ${others.join(', ')} directly from A:`,
      equation: rels.join(',  '),
    },
    {
      title: 'Back-substitute',
      content: `Plug A = ${vals.A} into each relation.`,
      equation: valStr(vars, vals),
    },
  ];
  return { steps, check: valStr(vars, vals) + ' — verify in all equations.' };
}

function linearHint(q, vars) {
  const others = vars.filter((v) => v !== q.base);
  return `Three? — actually ${others.length} equations define ${others.join(', ')} in terms of ${q.base}. Substitute them into the last equation and solve for ${q.base}.`;
}

// ---------------------------------------------------------------------------
// serialize one entry
// ---------------------------------------------------------------------------
function serialize(entry) {
  const eqs = entry.equations.map((e) => `'${e.replace(/'/g, "\\'")}'`).join(', ');
  const variables = entry.variables.map((v) => `'${v}'`).join(', ');
  const ans = entry.variables.map((v) => `${v}: ${entry.answer[v]}`).join(', ');
  const steps = entry.solSteps
    .map(
      (s) => `      {
        title: ${JSON.stringify(s.title)},
        content: ${JSON.stringify(s.content)},
        equation: ${JSON.stringify(s.equation)}
      }`
    )
    .join(',\n');
  return `  {
    id: ${entry.id},
    exam: ${entry.exam},
    number: '${entry.number}',
    difficulty: '${entry.difficulty}',
    chapterId: ${entry.chapterId},
    equations: [${eqs}],
    variables: [${variables}],
    answer: { ${ans} },
    xp: ${entry.xp},
    hint: ${JSON.stringify(entry.hint)},
    solution: createSolution([
${steps}
    ], ${JSON.stringify(entry.check)}),
  }`;
}

// ---------------------------------------------------------------------------
// generate the whole bank
// ---------------------------------------------------------------------------
const EXAMS = 8;
const PER_EXAM = 20;
// per-exam layout: q1-5 medium (3 var), q6-20 hard (4 var); some hard are quadratic
const QUAD_SLOTS = new Set([6, 10, 14, 18]); // which hard questions are quadratics

const entries = [];
let generated = 0;

for (let exam = 1; exam <= EXAMS; exam++) {
  for (let qn = 1; qn <= PER_EXAM; qn++) {
    const medium = qn <= 5;
    const vars = medium ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
    const isQuad = !medium && QUAD_SLOTS.has(qn);

    let q = null;
    for (let tries = 0; tries < 6 && !q; tries++) {
      q = isQuad ? buildQuadratic(vars) : buildLinear(vars);
    }
    if (!q) {
      // fallback: try the other generator
      q = buildLinear(vars);
    }
    if (!q) throw new Error(`failed to build ${exam}.${qn}`);

    const sol = q.type === 'quadratic' ? quadraticSolution(q, vars) : linearSolution(q, vars);
    const hint =
      q.type === 'quadratic'
        ? 'One equation contains only A — solve that quadratic first (try whole numbers), then use it to find the others.'
        : `${vars.filter((v) => v !== q.base).length} equations define the other letters in terms of ${q.base}. Substitute them into the remaining equation and solve for ${q.base}.`;

    entries.push({
      id: exam * 100 + qn,
      exam,
      number: `${exam}.${qn}`,
      difficulty: medium ? 'medium' : 'hard',
      chapterId: medium ? 2 : 3,
      equations: q.equations,
      variables: vars,
      answer: q.vals,
      xp: medium ? 20 : isQuad ? 35 : 30,
      hint,
      solSteps: sol.steps,
      check: sol.check,
    });
    generated++;
  }
}

// ---------------------------------------------------------------------------
// write file
// ---------------------------------------------------------------------------
const header = `// TestAS Mathematical Equations - Practice Questions
// All variables are whole numbers from 1-20. Every answer is a natural number
// (no negatives, no fractions). Each question is verified to have exactly one
// solution in the 1-20 range. Difficulty: MEDIUM (3 equations / 3 variables)
// and HARD (4 equations / 4 variables, including quadratics).

export const mathChapters = [
  { id: 2, name: 'Medium', description: '3 equations, 3 variables', icon: '🟡' },
  { id: 3, name: 'Hard', description: '4 equations or quadratic', icon: '🔴' },
];

`;

const helper = `// Helper function to create detailed solution steps
function createSolution(steps, finalCheck) {
  return {
    steps,
    finalCheck,
    timeEstimate: steps.length <= 3 ? '20-30 sec' : steps.length <= 5 ? '35-50 sec' : '50-70 sec'
  };
}

`;

const body =
  header +
  strategiesBlock +
  '\n\n' +
  helper +
  'export const mathLevels = [\n' +
  entries.map(serialize).join(',\n') +
  '\n];\n\n' +
  `export function getMathLevelsByExam(exam) {
  return mathLevels.filter(l => l.exam === exam);
}

export function getMathLevelsByDifficulty(difficulty) {
  return mathLevels.filter(l => l.difficulty === difficulty);
}
`;

fs.writeFileSync(SRC, body, 'utf8');
console.log(`Generated ${generated} questions across ${EXAMS} exams -> ${SRC}`);
