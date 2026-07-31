// Renders text where `code` is wrapped in <code> tags.
export function inlineCode(text) {
  const parts = text.split("`");
  return parts.map((part, i) =>
    i % 2 === 1 ? <code key={i}>{part}</code> : <span key={i}>{part}</span>
  );
}

export default function QuestionPanel({ question, index, onHintToggle, hintOpen }) {
  return (
    <section className="panel question-panel">
      <div className="panel-tab">QUESTION {String(index + 1).padStart(2, "0")}</div>
      <div className="panel-inner">
        <span className={`diff-badge diff-${question.difficulty}`}>
          {question.difficulty.toUpperCase()}
        </span>
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
