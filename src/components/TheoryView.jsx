import { useEffect, useMemo, useState } from "react";
import ModeTabs from "./ModeTabs.jsx";
import { inlineCode } from "./QuestionPanel.jsx";
import { THEORY_QUESTIONS } from "../data/theory.js";
import { KEYS, loadJSON, saveJSON } from "../lib/storage.js";

function allYears() {
  const set = new Set();
  for (const q of THEORY_QUESTIONS) for (const y of q.years ?? []) set.add(y);
  return [...set].sort((a, b) => b - a);
}

function allTopics() {
  const set = new Set();
  for (const q of THEORY_QUESTIONS) set.add(q.topic);
  return [...set].sort();
}

function countByYear() {
  const counts = { all: THEORY_QUESTIONS.length };
  for (const q of THEORY_QUESTIONS)
    for (const y of q.years ?? []) counts[y] = (counts[y] ?? 0) + 1;
  return counts;
}

export default function TheoryView() {
  const [year, setYear] = useState(() => loadJSON(KEYS.theoryYear, "all"));
  const [topic, setTopic] = useState(() => loadJSON(KEYS.theoryTopic, "all"));
  const [currentId, setCurrentId] = useState(
    () => loadJSON(KEYS.theoryCurrent, THEORY_QUESTIONS[0]?.id)
  );

  useEffect(() => saveJSON(KEYS.theoryYear, year), [year]);
  useEffect(() => saveJSON(KEYS.theoryTopic, topic), [topic]);
  useEffect(() => saveJSON(KEYS.theoryCurrent, currentId), [currentId]);

  const years = useMemo(allYears, []);
  const topics = useMemo(allTopics, []);
  const yearCounts = useMemo(countByYear, []);

  const filtered = THEORY_QUESTIONS.filter(
    (q) =>
      (year === "all" || (q.years ?? []).includes(Number(year))) &&
      (topic === "all" || q.topic === topic)
  );

  const current =
    THEORY_QUESTIONS.find((q) => q.id === currentId) ??
    filtered[0] ??
    THEORY_QUESTIONS[0];
  const qIndex = filtered.findIndex((q) => q.id === current.id);

  const selectAndEnsureVisible = (id) => {
    setCurrentId(id);
  };

  const changeYear = (next) => {
    setYear(next);
    const qs = THEORY_QUESTIONS.filter(
      (q) =>
        (next === "all" || (q.years ?? []).includes(Number(next))) &&
        (topic === "all" || q.topic === topic)
    );
    if (qs.length && !qs.some((q) => q.id === currentId)) {
      setCurrentId(qs[0].id);
    }
  };

  const changeTopic = (next) => {
    setTopic(next);
    const qs = THEORY_QUESTIONS.filter(
      (q) =>
        (year === "all" || (q.years ?? []).includes(Number(year))) &&
        (next === "all" || q.topic === next)
    );
    if (qs.length && !qs.some((q) => q.id === currentId)) {
      setCurrentId(qs[0].id);
    }
  };

  return (
    <main className="layout">
      <div className="left-col">
        <ModeTabs />
        <div className="filter-bar theory-filters">
          <label className="filter-field">
            <span className="filter-label">YEAR</span>
            <select
              className="filter-select"
              value={String(year)}
              onChange={(e) => changeYear(e.target.value)}
              aria-label="filter theory by year"
            >
              <option value="all">All ({yearCounts.all ?? 0})</option>
              {years.map((y) => (
                <option key={y} value={String(y)}>
                  {y} ({yearCounts[y] ?? 0})
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span className="filter-label">TOPIC</span>
            <select
              className="filter-select"
              value={topic}
              onChange={(e) => changeTopic(e.target.value)}
              aria-label="filter theory by topic"
            >
              <option value="all">All ({THEORY_QUESTIONS.length})</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="q-list-empty">no theory questions match this filter</p>
        ) : (
          <nav className="q-list theory-list" aria-label="theory questions">
            {filtered.map((q, i) => (
              <button
                key={q.id}
                className={`q-item${q.id === current.id ? " active" : ""}`}
                onClick={() => selectAndEnsureVisible(q.id)}
              >
                <span className="q-item-num theory-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="q-item-title">{q.title}</span>
                <span className="theory-marks">{q.marks}M</span>
              </button>
            ))}
          </nav>
        )}

        {/* Desktop: question on the right, like EditorPanel position.
            On mobile the grid stacks, so it falls below the list. */}
      </div>

      <section className="panel question-panel">
        <TheoryQuestionBody question={current} index={qIndex} />
      </section>
    </main>
  );
}

function TheoryQuestionBody({ question, index }) {
  return (
    <>
      <div className="panel-tab">
        THEORY {String(index + 1).padStart(2, "0")}
      </div>
      <div className="panel-inner">
        <div className="badge-row">
          <span className="marks-badge">{question.marks} MARKS</span>
          <span className="source-badge">{question.source}</span>
          <span className="source-badge">{question.topic}</span>
          {question.repeated && (
            <span className="repeat-badge">REPEATED ×2</span>
          )}
        </div>
        <h1 className="q-title">{question.title}</h1>
        <p className="q-body">{inlineCode(question.body)}</p>
      </div>
    </>
  );
}
