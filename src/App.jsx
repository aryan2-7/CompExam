import { useEffect, useRef, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ModeTabs from "./components/ModeTabs.jsx";
import QuestionList from "./components/QuestionList.jsx";
import QuestionPanel from "./components/QuestionPanel.jsx";
import EditorPanel from "./components/EditorPanel.jsx";
import TheoryView from "./components/TheoryView.jsx";
import Cat from "./components/Cat.jsx";
import Toast from "./components/Toast.jsx";
import { QUESTIONS } from "./data/questions.js";
import { executeCode } from "./lib/execute.js";
import { normalizeStdin, outputsMatch } from "./lib/compare.js";
import { KEYS, loadCode, loadJSON, saveCode, saveJSON } from "./lib/storage.js";

const CAT_LINES = {
  idle: ["it's late, huh", "still up?", "one more try", "you got this"],
  pass: ["yes!! nailed it", "let's gooo", "clean run", "purrfect", "that's the one"],
  fail: ["hm, not quite", "lol u suck", "close though", "keep going"],
  error: ["uh oh, mice in the compilaion", "syntax gremlins"],
  running: ["compiling...", "hold on..."],
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function countByDifficulty() {
  const counts = { all: QUESTIONS.length, easy: 0, medium: 0, hard: 0 };
  for (const q of QUESTIONS) counts[q.difficulty]++;
  return counts;
}

function allYears() {
  const set = new Set();
  for (const q of QUESTIONS) for (const y of q.years ?? []) set.add(y);
  return [...set].sort((a, b) => b - a);
}

function countByYear() {
  const counts = { all: QUESTIONS.length };
  for (const q of QUESTIONS) for (const y of q.years ?? []) counts[y] = (counts[y] ?? 0) + 1;
  return counts;
}

export default function App() {
  const [year, setYear] = useState(() => loadJSON(KEYS.year, "all"));
  const [difficulty, setDifficulty] = useState(() => loadJSON(KEYS.difficulty, "all"));
  const [currentId, setCurrentId] = useState(() => loadJSON(KEYS.current, QUESTIONS[0]?.id));
  const [solved, setSolved] = useState(() => loadJSON(KEYS.solved, []));
  const [code, setCode] = useState(() => loadCode(currentId) ?? QUESTIONS[0]?.starterCode ?? "");
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pips, setPips] = useState([]);
  const [lines, setLines] = useState([]);
  const [mood, setMood] = useState("idle");
  const [catMessage, setCatMessage] = useState(null);
  const [toast, setToast] = useState(null);
  const [hintOpen, setHintOpen] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [lastActive, setLastActive] = useState(Date.now());

  const moodTimer = useRef(null);
  const messageTimer = useRef(null);
  const saveTimer = useRef(null);
  const moodRef = useRef(mood);
  moodRef.current = mood;

  const filtered = QUESTIONS.filter(
    (q) =>
      (difficulty === "all" || q.difficulty === difficulty) &&
      (year === "all" || (q.years ?? []).includes(Number(year)))
  );
  const currentQuestion =
    QUESTIONS.find((q) => q.id === currentId) ?? filtered[0] ?? QUESTIONS[0];
  const qIndex = filtered.findIndex((q) => q.id === currentQuestion.id);
  const diffCounts = countByDifficulty();
  const years = allYears();
  const yearCounts = countByYear();

  // ---- persistence helpers ----
  useEffect(() => saveJSON(KEYS.year, year), [year]);
  useEffect(() => saveJSON(KEYS.difficulty, difficulty), [difficulty]);
  useEffect(() => saveJSON(KEYS.current, currentId), [currentId]);
  useEffect(() => saveJSON(KEYS.solved, solved), [solved]);

  // ---- cat helpers ----
  const bumpActive = () => {
    setLastActive(Date.now());
    setMood((m) => (m === "sleep" ? "idle" : m));
  };

  const setCatMood = (next, revertMs) => {
    if (moodTimer.current) clearTimeout(moodTimer.current);
    setMood(next);
    if (revertMs) {
      moodTimer.current = setTimeout(() => setMood("idle"), revertMs);
    }
  };

  const catSay = (pool, duration = 2600) => {
    if (messageTimer.current) clearTimeout(messageTimer.current);
    setCatMessage(pick(pool));
    messageTimer.current = setTimeout(() => setCatMessage(null), duration);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  // sleep after inactivity, idle chatter
  useEffect(() => {
    if (mood !== "idle") return;
    const t = setTimeout(() => setMood("sleep"), 25000);
    return () => clearTimeout(t);
  }, [mood, lastActive]);

  useEffect(() => {
    const id = setInterval(() => {
      if (moodRef.current === "idle" && Math.random() < 0.35) {
        catSay(CAT_LINES.idle, 2200);
      }
    }, 14000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- question switching ----
  const selectQuestion = (id) => {
    bumpActive();
    setCurrentId(id);
    const q = QUESTIONS.find((x) => x.id === id);
    setCode(loadCode(id) ?? q?.starterCode ?? "");
    setPips([]);
    setLines([]);
    setHintOpen(false);
  };

  const applyFilters = (nextYear, nextDifficulty) => {
    bumpActive();
    const qs = QUESTIONS.filter(
      (q) =>
        (nextDifficulty === "all" || q.difficulty === nextDifficulty) &&
        (nextYear === "all" || (q.years ?? []).includes(Number(nextYear)))
    );
    if (qs.length && !qs.some((q) => q.id === currentId)) {
      const first = qs[0];
      setCurrentId(first.id);
      setCode(loadCode(first.id) ?? first.starterCode ?? "");
      setPips([]);
      setLines([]);
      setHintOpen(false);
    }
  };

  const changeYear = (next) => {
    setYear(next);
    applyFilters(next, difficulty);
  };

  const changeDifficulty = (next) => {
    setDifficulty(next);
    applyFilters(year, next);
  };

  const handleCodeChange = (value) => {
    bumpActive();
    setCode(value);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveCode(currentQuestion.id, value), 500);
  };

  const handleReset = () => {
    bumpActive();
    setCode(currentQuestion.starterCode);
    saveCode(currentQuestion.id, currentQuestion.starterCode);
    showToast("reset to starter code");
  };

  const handleHintToggle = () => {
    bumpActive();
    setHintOpen((v) => !v);
  };

  // ---- run (single execution, shows program output) ----
  const handleRun = async (stdinInput = "") => {
    bumpActive();
    if (!code.trim()) {
      showToast("write some code first");
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
      return;
    }

    setRunning(true);
    setLines([]);
    catSay(CAT_LINES.running, 4000);
    setCatMood("running");

    const addLine = (line) => setLines((prev) => [...prev, line]);

    try {
      const res = await executeCode(code, normalizeStdin(stdinInput ?? ""));

      if (res.compile && res.compile.code !== 0) {
        addLine({ kind: "verdict", passed: false, text: "COMPILE ERROR" });
        addLine({ kind: "compile", text: res.compile.output || "unknown compiler error" });
        setCatMood("error", 3000);
        catSay(CAT_LINES.error, 3000);
        return;
      }

      const stdinShown = (stdinInput ?? "").trim();
      if (stdinShown) {
        addLine({ kind: "stdin", text: stdinShown });
      }

      const stdout = res.run.stdout ?? "";
      if (stdout.trim()) {
        addLine({ kind: "output", text: stdout });
      } else {
        addLine({ kind: "empty", text: "(no output — program produced nothing)" });
      }

      if (res.run.stderr && res.run.stderr.trim()) {
        addLine({ kind: "detail", text: res.run.stderr.trim() });
      }

      setCatMood("idle");
    } catch (err) {
      addLine({
        kind: "error",
        text: `network error: ${err.message}. check your connection and try again.`,
      });
      setCatMood("fail", 2600);
      catSay(CAT_LINES.fail);
    } finally {
      setRunning(false);
    }
  };

  // ---- submit (runs all hidden tests) ----
  const handleSubmit = async () => {
    bumpActive();
    if (!code.trim()) {
      showToast("write some code first");
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
      return;
    }

    const q = currentQuestion;
    setSubmitting(true);
    setPips(q.tests.map(() => "pending"));
    setLines([]);
    catSay(CAT_LINES.running, 4000);
    setCatMood("running");

    const addLine = (line) => setLines((prev) => [...prev, line]);
    const clearPips = () => setPips(q.tests.map(() => ""));

    const results = [];
    let compileErrorShown = false;

    for (let i = 0; i < q.tests.length; i++) {
      const test = q.tests[i];
      try {
        const res = await executeCode(code, normalizeStdin(test.input));

        if (res.compile && res.compile.code !== 0) {
          addLine({ kind: "verdict", passed: false, text: "COMPILE ERROR" });
          addLine({ kind: "compile", text: res.compile.output || "unknown compiler error" });
          compileErrorShown = true;
          clearPips();
          break;
        }

        const actual = res.run.stdout || "";
        const expected = test.expected;
        const passed = outputsMatch(actual, expected);

        results.push(passed);
        setPips((prev) => {
          const next = [...prev];
          next[i] = passed ? "pass" : "fail";
          return next;
        });
        addLine({
          kind: "result",
          passed,
          text: `${passed ? "✓" : "✗"} test ${i + 1} — input: ${test.input}`,
        });
        if (!passed) {
          const shownActual = (actual || "").trim() || "(empty)";
          addLine({
            kind: "detail",
            text: `expected "${expected}", got "${shownActual}"${
              res.run.stderr ? "\n" + res.run.stderr.trim() : ""
            }`,
          });
        }
      } catch (err) {
        addLine({
          kind: "error",
          text: `network error: ${err.message}. check your connection and try again.`,
        });
        clearPips();
        setSubmitting(false);
        setCatMood("fail", 2600);
        catSay(CAT_LINES.fail);
        return;
      }
    }

    setSubmitting(false);

    if (compileErrorShown) {
      setCatMood("error", 3000);
      catSay(CAT_LINES.error, 3000);
      return;
    }

    const allPassed = results.length === q.tests.length && results.every(Boolean);
    addLine({
      kind: "verdict",
      passed: allPassed,
      text: allPassed
        ? "ALL TESTS PASSED"
        : `${results.filter(Boolean).length}/${results.length} TESTS PASSED`,
    });

    if (allPassed) {
      if (!solved.includes(q.id)) setSolved((prev) => [...prev, q.id]);
      setCatMood("pass", 2600);
      catSay(CAT_LINES.pass);
    } else {
      setCatMood("fail", 2600);
      catSay(CAT_LINES.fail);
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
    }
  };

  return (
    <HashRouter>
      <div className="scanlines"></div>
      <TopBar solved={solved.length} total={QUESTIONS.length} />

      <Routes>
        <Route
          path="/coding"
          element={
            <main className="layout">
              <div className="left-col">
                <ModeTabs />
                <FilterBar
                  year={year}
                  difficulty={difficulty}
                  years={years}
                  yearCounts={yearCounts}
                  diffCounts={diffCounts}
                  onYearChange={changeYear}
                  onDifficultyChange={changeDifficulty}
                />
                <QuestionList
                  questions={filtered}
                  currentId={currentQuestion.id}
                  solved={solved}
                  onSelect={selectQuestion}
                />
                <QuestionPanel
                  question={currentQuestion}
                  index={qIndex}
                  hintOpen={hintOpen}
                  onHintToggle={handleHintToggle}
                />
              </div>

              <EditorPanel
                question={currentQuestion}
                code={code}
                onChange={handleCodeChange}
                onRun={handleRun}
                onSubmit={handleSubmit}
                onReset={handleReset}
                running={running}
                submitting={submitting}
                pips={pips}
                lines={lines}
                shaking={shaking}
              />
            </main>
          }
        />
        <Route path="/theory" element={<TheoryView />} />
        <Route path="*" element={<Navigate to="/coding" replace />} />
      </Routes>

      <Cat mood={mood} message={catMessage} />
      <Toast message={toast} />
    </HashRouter>
  );
}
