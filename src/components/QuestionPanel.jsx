// Renders text where `code` is wrapped in <code> tags.
// Long / multi-line snippets become block <pre> code for readability,
// short tokens stay inline.
export function isBlockCode(part) {
  return part.includes("\n") || part.length > 60 || /[{};]/.test(part);
}

export function inlineCode(text) {
  const parts = String(text ?? "").split("`");
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      if (isBlockCode(part)) {
        return (
          <pre key={i} className="mcq-code-block">
            <code>{part.trim()}</code>
          </pre>
        );
      }
      return <code key={i}>{part}</code>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function QuestionPanel({ question, index, onHintToggle, hintOpen }) {
  return (
    <section className="panel question-panel">
      <div className="panel-tab">QUESTION {String(index + 1).padStart(2, "0")}</div>
      <div className="panel-inner">
        <div className="badge-row">
          <span className={`diff-badge diff-${question.difficulty}`}>
            {question.difficulty.toUpperCase()}
          </span>
          {(question.sources ?? (question.source ? [question.source] : [])).map((s) => (
            <span key={s} className="source-badge">
              {s}
            </span>
          ))}
          {question.repeated && <span className="repeat-badge">REPEATED ×2</span>}
        </div>
        <h1 className="q-title">{question.title}</h1>

        <p className="q-body">{inlineCode(question.body)}</p>

        <div className="q-block">
          <div className="q-block-label">Input</div>
          <p>{inlineCode(question.input)}</p>
        </div>

        <div className="q-block">
          <div className="q-block-label">Output</div>
          <p>{inlineCode(question.output)}</p>
        </div>

        <div className="q-block">
          <div className="q-block-label">Examples</div>
          {question.examples.map((ex, i) => (
            <div className="example" key={i}>
              <div className="example-row">
                <span>input</span>
                <code>{ex.input}</code>
              </div>
              <div className="example-row">
                <span>output</span>
                <code>{ex.output}</code>
              </div>
            </div>
          ))}
        </div>

        {question.hint && (
          <div className="q-block hint-block">
            <button className="hint-toggle" onClick={onHintToggle}>
              {hintOpen ? "▾ hint" : "▸ hint"}
            </button>
            {hintOpen && <p className="hint-text">{inlineCode(question.hint)}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
