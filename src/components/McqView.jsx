import { useEffect, useMemo, useState } from "react";
import ModeTabs from "./ModeTabs.jsx";
import { inlineCode } from "./QuestionPanel.jsx";
import { MCQ_QUESTIONS, MCQ_SESSIONS, countBySession } from "../data/mcqs.js";
import { KEYS, loadJSON, saveJSON } from "../lib/storage.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function McqView({
  answersBySession,
  setAnswersBySession,
  onCorrect,
  onWrong,
}) {
  const [session, setSession] = useState(
    () => loadJSON(KEYS.mcqSession, MCQ_SESSIONS[0])
  );
  const [internalAnswers, setInternalAnswers] = useState(() => {
    const raw = loadJSON(KEYS.mcqAnswers, {});
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
    // Keep only { [session]: { [id]: choiceIndex } } with numeric choices.
    const clean = {};
    for (const [s, v] of Object.entries(raw)) {
      if (!v || typeof v !== "object" || Array.isArray(v)) continue;
      const entries = Object.entries(v).filter(
        ([, choice]) => Number.isInteger(choice)
      );
      if (entries.length) clean[s] = Object.fromEntries(entries);
    }
    return clean;
  });

  // Controlled from App when props are provided (so the TopBar can show
  // live MCQ progress); otherwise fall back to internal localStorage state.
  const controlled = answersBySession !== undefined && setAnswersBySession;
  const answersState = controlled ? answersBySession : internalAnswers;
  const setAnswersState = controlled ? setAnswersBySession : setInternalAnswers;

  useEffect(() => saveJSON(KEYS.mcqSession, session), [session]);
  useEffect(() => {
    if (!controlled) saveJSON(KEYS.mcqAnswers, answersState);
  }, [answersState, controlled]);

  const counts = useMemo(countBySession, []);
  const questions = useMemo(
    () => MCQ_QUESTIONS.filter((q) => q.session === session),
    [session]
  );

  const answers = answersState[session] ?? {};

  const answered = questions.filter((q) => answers[q.id] !== undefined);
  const correct = answered.filter(
    (q) => !q.allWrong && answers[q.id] === q.answerIndex
  );

  const selectOption = (id, index) => {
    if (answers[id] !== undefined) return;
    // Store only attempted questions { [id]: choiceIndex }, grouped by session.
    setAnswersState((prev) => {
      const sessionAnswers = prev[session] ?? {};
      if (sessionAnswers[id] !== undefined) return prev;
      return { ...prev, [session]: { ...sessionAnswers, [id]: index } };
    });
    const q = questions.find((x) => x.id === id);
    // Disputed questions (all listed options wrong) never count as correct.
    if (q && !q.allWrong && index === q.answerIndex) onCorrect?.();
    else onWrong?.();
  };

  const retryQuestion = (id) => {
    setAnswersState((prev) => {
      const sessionAnswers = prev[session];
      if (!sessionAnswers || sessionAnswers[id] === undefined) return prev;
      const next = { ...sessionAnswers };
      delete next[id];
      if (Object.keys(next).length === 0) {
        const rest = { ...prev };
        delete rest[session];
        return rest;
      }
      return { ...prev, [session]: next };
    });
  };

  const resetSession = () => {
    setAnswersState((prev) => {
      if (!prev[session]) return prev;
      const next = { ...prev };
      delete next[session];
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
  const isDisputed = !!question.allWrong;
  const hasNote = !!question.disputedNote;
  const isCorrect = locked && !isDisputed && selected === question.answerIndex;

  return (
    <article className="mcq-card">
      <div className="mcq-q">
        <span className="mcq-qnum">{String(number).padStart(2, "0")}</span>
        <div className="mcq-qtext">
          {inlineCode(question.body)}
          {hasNote && (
            <span className="mcq-flag-wrap">
              <button
                className="mcq-flag-btn"
                type="button"
                aria-label="question note"
              >
                ?
              </button>
              <span className="mcq-flag-tip" role="tooltip">
                {inlineCode(
                  question.disputedNote ??
                    "All listed options are incorrect."
                )}{" "}
                {question.trueAnswer && (
                  <>Correct output: <code>{question.trueAnswer}</code></>
                )}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="mcq-options" role="group" aria-label={`options for question ${number}`}>
        {question.options.map((opt, i) => {
          let cls = "mcq-option";
          if (locked) {
            if (!isDisputed && i === question.answerIndex) cls += " correct";
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
              {locked && !isDisputed && i === question.answerIndex && (
                <span className="mcq-mark">✓</span>
              )}
              {locked && i === selected && (isDisputed || i !== question.answerIndex) && (
                <span className="mcq-mark">✗</span>
              )}
            </button>
          );
        })}
      </div>
      {locked && (
        <div className={`mcq-feedback${isCorrect ? " pass" : " fail"}`}>
          {isDisputed ? (
            <span>
              ✗ all listed options are wrong — correct:{" "}
              <code>{question.trueAnswer}</code>
            </span>
          ) : isCorrect ? (
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
