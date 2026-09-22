import { useEffect, useMemo, useState } from "react";
import ModeTabs from "./ModeTabs.jsx";
import { inlineCode } from "./QuestionPanel.jsx";
import { MCQ_QUESTIONS, MCQ_SESSIONS, countBySession } from "../data/mcqs.js";
import { KEYS, loadJSON, saveJSON } from "../lib/storage.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function McqView({ onCorrect, onWrong }) {
  const [session, setSession] = useState(
    () => loadJSON(KEYS.mcqSession, MCQ_SESSIONS[0])
  );
  const [answers, setAnswers] = useState({});

  useEffect(() => saveJSON(KEYS.mcqSession, session), [session]);

  const counts = useMemo(countBySession, []);
  const questions = useMemo(
    () => MCQ_QUESTIONS.filter((q) => q.session === session),
    [session]
  );

  const answered = questions.filter((q) => answers[q.id] !== undefined);
  const correct = answered.filter((q) => answers[q.id] === q.answerIndex);

  const selectOption = (id, index) => {
    if (answers[id] !== undefined) return;
    setAnswers((prev) =>
      prev[id] !== undefined ? prev : { ...prev, [id]: index }
    );
    const q = questions.find((x) => x.id === id);
    if (q && index === q.answerIndex) onCorrect?.();
    else onWrong?.();
  };

  const retryQuestion = (id) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const resetSession = () => {
    setAnswers((prev) => {
      const next = { ...prev };
      for (const q of questions) delete next[q.id];
      return next;
    });
  };

  const activeSession = MCQ_SESSIONS.includes(session)
    ? session
    : MCQ_SESSIONS[0];

  return (
    <main className="layout">
      <div className="left-col">
        <ModeTabs />
        <nav className="q-list mcq-session-list" aria-label="mcq sessions">
          {MCQ_SESSIONS.map((s) => (
            <button
              key={s}
              className={`q-item${s === activeSession ? " active" : ""}`}
              onClick={() => setSession(s)}
            >
              <span className="q-item-num mcq-num">▸</span>
              <span className="q-item-title">{s}</span>
              <span className="theory-marks">{counts[s] ?? 0}</span>
            </button>
          ))}
        </nav>
      </div>

      <section className="panel mcq-panel">
        <div className="panel-tab">
          <span>
            MCQ — {activeSession.toUpperCase()} ({questions.length})
          </span>
          <span className="mcq-progress">
            {answered.length}/{questions.length} done · {correct.length} correct
          </span>
        </div>
        <div className="panel-inner">
          {answered.length > 0 && (
            <button className="mcq-reset" onClick={resetSession}>
              ↺ reset session
            </button>
          )}
          {questions.map((q, qi) => (
            <McqCard
              key={q.id}
              question={q}
              number={qi + 1}
              selected={answers[q.id]}
              onSelect={(i) => selectOption(q.id, i)}
              onRetry={() => retryQuestion(q.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function McqCard({ question, number, selected, onSelect, onRetry }) {
  const locked = selected !== undefined;
  const isCorrect = locked && selected === question.answerIndex;

  return (
    <article className="mcq-card">
      <div className="mcq-q">
        <span className="mcq-qnum">{String(number).padStart(2, "0")}</span>
        <p className="mcq-qtext">{inlineCode(question.body)}</p>
      </div>
      <div className="mcq-options" role="group" aria-label={`options for question ${number}`}>
        {question.options.map((opt, i) => {
          let cls = "mcq-option";
          if (locked) {
            if (i === question.answerIndex) cls += " correct";
            else if (i === selected) cls += " wrong";
            else cls += " dimmed";
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={locked}
              onClick={() => onSelect(i)}
            >
              <span className="mcq-letter">{LETTERS[i]}</span>
              <span className="mcq-opt-text">{inlineCode(opt)}</span>
              {locked && i === question.answerIndex && (
                <span className="mcq-mark">✓</span>
              )}
              {locked && i === selected && selected !== question.answerIndex && (
                <span className="mcq-mark">✗</span>
              )}
            </button>
          );
        })}
      </div>
      {locked && (
        <div className={`mcq-feedback${isCorrect ? " pass" : " fail"}`}>
          {isCorrect ? (
            <span>✓ correct</span>
          ) : (
            <span>
              ✗ incorrect — correct: {LETTERS[question.answerIndex]} ·{" "}
              {question.options[question.answerIndex]}
            </span>
          )}
          <button className="mcq-retry" onClick={onRetry}>
            ↺ retry
          </button>
        </div>
      )}
    </article>
  );
}
