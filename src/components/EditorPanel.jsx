export default function EditorPanel({
  question,
  code,
  onChange,
  onRun,
  onReset,
  running,
  pips,
  lines,
  shaking,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.target;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const next = el.value.slice(0, start) + "    " + el.value.slice(end);
      el.value = next;
      el.selectionStart = el.selectionEnd = start + 4;
      onChange(next);
    }
  };

  return (
    <section className="panel editor-panel">
      <div className="panel-tab editor-tab">
        <span>main.cpp</span>
        <div className="tab-actions">
          <button className="icon-btn" title="Reset to starter code" onClick={onReset}>
            ↺ reset
          </button>
        </div>
      </div>

      <textarea
        className="code-input"
        spellCheck={false}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="code editor"
      />

      <div className="run-row">
        <button
          className={`run-btn ${shaking ? "shake" : ""}`}
          onClick={onRun}
          disabled={running}
        >
          <span className={`run-btn-label ${running ? "hidden" : ""}`}>▶ RUN</span>
          <span className={`run-btn-loading ${running ? "" : "hidden"}`}>
            compiling
            <span className="dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
        </button>
        <div className="test-pips">
          {pips.map((state, i) => (
            <div key={i} className={`pip ${state}`} data-test={i} />
          ))}
        </div>
      </div>

      <div className="console">
        <div className="console-tab">OUTPUT</div>
        <div className="console-body">
          {lines.length === 0 ? (
            <p className="console-placeholder">// run your code to see output here</p>
          ) : (
            lines.map((line, i) => <ConsoleLine key={i} line={line} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ConsoleLine({ line }) {
  switch (line.kind) {
    case "verdict":
      return (
        <div className={`verdict-banner ${line.passed ? "pass" : "fail"}`}>{line.text}</div>
      );
    case "result":
      return <div className={`result-line ${line.passed ? "pass" : "fail"}`}>{line.text}</div>;
    case "detail":
      return <div className="result-detail">{line.text}</div>;
    case "compile":
      return <div className="compile-error">{line.text}</div>;
    case "error":
      return <div className="compile-error">{line.text}</div>;
    default:
      return null;
  }
}
