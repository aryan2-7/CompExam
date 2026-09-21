export default function QuestionList({ questions, currentId, solved, onSelect }) {
  if (questions.length === 0) {
    return <p className="q-list-empty">no questions match this filter</p>;
  }
  return (
    <nav className="q-list" aria-label="questions">
      {questions.map((q, i) => {
        const active = q.id === currentId;
        const done = solved.includes(q.id);
        return (
          <button
            key={q.id}
            className={`q-item ${active ? "active" : ""} ${done ? "done" : ""}`}
            onClick={() => onSelect(q.id)}
          >
            <span className={`q-item-num is-${q.difficulty}`}>{String(i + 1).padStart(2, "0")}</span>
            <span className="q-item-title">{q.title}</span>
            <span className="q-item-check">{done ? "✓" : ""}</span>
          </button>
        );
      })}
    </nav>
  );
}
