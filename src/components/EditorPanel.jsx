import { useLayoutEffect, useRef, useState } from "react";

// Pairs that auto-close, and the full set of closing chars we allow "skip over" for.
const PAIRS = { "(": ")", "[": "]", "{": "}", '"': '"', "'": "'" };
const CLOSERS = new Set(Object.values(PAIRS));

// A handful of C++ keywords/stdlib names worth suggesting even before the
// user has typed them anywhere else in the buffer.
const BASE_WORDS = [
  "include", "iostream", "using", "namespace", "std", "int", "float",
  "double", "char", "bool", "void", "string", "vector", "return", "main",
  "cin", "cout", "endl", "if", "else", "for", "while", "class", "struct",
  "public", "private", "protected", "virtual", "override", "static",
  "const", "true", "false", "new", "delete", "this", "template",
  "typename", "friend", "operator", "throw", "try", "catch",
];

const IDENTIFIER_RE = /[A-Za-z_][A-Za-z0-9_]*/g;
const MAX_SUGGESTIONS = 6;

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
  const textareaRef = useRef(null);
  const mirrorRef = useRef(null);
  // Selection to restore after React re-renders with the new `code` value.
  // We never write el.value or el.selectionStart directly from inside the
  // keydown handler — mutating the DOM node while it's a React-controlled
  // input is what causes characters to flicker/disappear when typing fast
  // (e.g. "<<"): React re-renders on its own schedule and can clobber or
  // race with a manual DOM write. Instead we hand React the new string via
  // onChange and separately record where the caret should end up; a
  // layout effect applies that caret position after the DOM has the new
  // value committed, so there's exactly one writer of el.value (React).
  const pendingSelection = useRef(null);

  // Autocomplete dropdown state.
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuPos, setMenuPos] = useState(null);

  useLayoutEffect(() => {
    const sel = pendingSelection.current;
    if (sel && textareaRef.current) {
      textareaRef.current.selectionStart = sel.start;
      textareaRef.current.selectionEnd = sel.end;
      pendingSelection.current = null;
    }
  }, [code]);

  // Replaces the textarea's content and schedules the caret to land at
  // [selStart, selEnd] once React has re-rendered with the new value.
  function commit(next, selStart, selEnd, onChangeFn) {
    pendingSelection.current = { start: selStart, end: selEnd ?? selStart };
    onChangeFn(next);
  }

  // Returns { word, wordStart } for the identifier immediately before the
  // caret, or null if the caret isn't inside/after a word.
  function currentWord(value, caret) {
    let i = caret;
    while (i > 0 && /[A-Za-z0-9_]/.test(value[i - 1])) i--;
    if (i === caret) return null;
    return { word: value.slice(i, caret), wordStart: i };
  }

  // Computes the pixel position of the caret within the textarea by
  // rendering an invisible mirror <div> with identical font/box metrics
  // and measuring where a marker span lands — textareas don't expose
  // caret coordinates directly, so this is the standard workaround.
  function caretPixelPosition(el, caret) {
    const mirror = mirrorRef.current;
    if (!mirror) return null;
    const style = window.getComputedStyle(el);
    [
      "boxSizing", "width", "paddingTop", "paddingRight", "paddingBottom",
      "paddingLeft", "borderTopWidth", "borderRightWidth", "borderBottomWidth",
      "borderLeftWidth", "fontFamily", "fontSize", "fontWeight", "lineHeight",
      "letterSpacing", "tabSize", "whiteSpace", "wordWrap",
    ].forEach((prop) => {
      mirror.style[prop] = style[prop];
    });
    mirror.style.whiteSpace = "pre-wrap";
    mirror.style.wordWrap = "break-word";

    const before = el.value.slice(0, caret);
    mirror.textContent = before;
    const marker = document.createElement("span");
    marker.textContent = "\u200b";
    mirror.appendChild(marker);

    const top = marker.offsetTop - el.scrollTop;
    const left = marker.offsetLeft - el.scrollLeft;
    return { top, left };
  }

  function closeSuggestions() {
    setSuggestions([]);
    setActiveIndex(0);
    setMenuPos(null);
  }

  // Recomputes the suggestion list for the word currently being typed.
  // Runs after every keystroke that could change the buffer or caret.
  function refreshSuggestions(el, value, caret) {
    const cw = currentWord(value, caret);
    if (!cw || cw.word.length < 2) {
      closeSuggestions();
      return;
    }

    const found = new Set();
    let match;
    IDENTIFIER_RE.lastIndex = 0;
    while ((match = IDENTIFIER_RE.exec(value))) {
      const w = match[0];
      // Skip the occurrence the caret is currently sitting inside — it's
      // the word being typed, not a completion candidate for itself.
      const atCaret = match.index === cw.wordStart && match.index + w.length >= caret;
      if (!atCaret) found.add(w);
    }
    BASE_WORDS.forEach((w) => found.add(w));

    const lower = cw.word.toLowerCase();
    const list = [...found]
      .filter((w) => w !== cw.word && w.toLowerCase().startsWith(lower))
      .sort((a, b) => a.length - b.length)
      .slice(0, MAX_SUGGESTIONS);

    if (list.length === 0) {
      closeSuggestions();
      return;
    }

    setSuggestions(list);
    setActiveIndex(0);
    const pos = caretPixelPosition(el, caret);
    setMenuPos(pos);
  }

  // Inserts `word` in place of the identifier currently being typed.
  function acceptSuggestion(word) {
    const el = textareaRef.current;
    if (!el) return;
    const caret = el.selectionStart;
    const cw = currentWord(el.value, caret);
    if (!cw) return;
    const next = el.value.slice(0, cw.wordStart) + word + el.value.slice(caret);
    const pos = cw.wordStart + word.length;
    closeSuggestions();
    commit(next, pos, pos, onChange);
  }

  const handleKeyDown = (e) => {
    const el = e.target;
    const { value } = el;
    const start = el.selectionStart;
    const end = el.selectionEnd;

    // While the suggestion dropdown is open, arrow keys navigate it and
    // Enter/Tab accept the highlighted entry instead of their normal
    // editor behavior (newline / indent).
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % suggestions.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        acceptSuggestion(suggestions[activeIndex]);
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeSuggestions();
        return;
      }
    }

    // Tab / Shift+Tab — indent or outdent by 4 spaces.
    if (e.key === "Tab") {
      e.preventDefault();

      if (start !== end) {
        // Multi-line selection: indent/outdent every touched line.
        const lineStart = value.lastIndexOf("\n", start - 1) + 1;
        const before = value.slice(0, lineStart);
        const selected = value.slice(lineStart, end);
        const after = value.slice(end);

        let newSelected;
        let firstLineDelta = 0;
        if (e.shiftKey) {
          let removedFirst = 0;
          newSelected = selected
            .split("\n")
            .map((line, i) => {
              const removeCount = line.startsWith("    ")
                ? 4
                : line.match(/^ */)[0].length;
              if (i === 0) removedFirst = removeCount;
              return line.slice(removeCount);
            })
            .join("\n");
          firstLineDelta = -removedFirst;
        } else {
          newSelected = selected
            .split("\n")
            .map((line) => "    " + line)
            .join("\n");
          firstLineDelta = 4;
        }

        const next = before + newSelected + after;
        commit(next, start + firstLineDelta, start + firstLineDelta + newSelected.length, onChange);
        return;
      }

      if (e.shiftKey) {
        // Outdent the current line by up to 4 spaces.
        const lineStart = value.lastIndexOf("\n", start - 1) + 1;
        const leading = value.slice(lineStart).match(/^ */)[0];
        const removeCount = Math.min(4, leading.length);
        const next = value.slice(0, lineStart) + value.slice(lineStart + removeCount);
        const pos = start - removeCount;
        commit(next, pos, pos, onChange);
        return;
      }

      const next = value.slice(0, start) + "    " + value.slice(end);
      commit(next, start + 4, start + 4, onChange);
      return;
    }

    // Enter — auto-indent to match the previous line's leading whitespace,
    // and add one extra level if the line ends with an opening bracket.
    if (e.key === "Enter") {
      e.preventDefault();
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const currentLine = value.slice(lineStart, start);
      const indent = currentLine.match(/^ */)[0];

      const charBefore = value[start - 1];
      const charAfter = value[start];
      const opensBlock = charBefore in PAIRS && PAIRS[charBefore] === charAfter;

      if (opensBlock) {
        // Cursor is between a bracket pair, e.g. `{|}` — expand into a block.
        const inner = "\n" + indent + "    ";
        const closingLine = "\n" + indent;
        const next = value.slice(0, start) + inner + closingLine + value.slice(end);
        const pos = start + inner.length;
        commit(next, pos, pos, onChange);
        return;
      }

      const extra = /[{([]\s*$/.test(currentLine) ? "    " : "";
      const insert = "\n" + indent + extra;
      const next = value.slice(0, start) + insert + value.slice(end);
      const pos = start + insert.length;
      commit(next, pos, pos, onChange);
      return;
    }

    // Auto-close brackets and quotes; skip over an existing closer instead of
    // inserting a duplicate.
    if (Object.prototype.hasOwnProperty.call(PAIRS, e.key) && start === end) {
      const opener = e.key;
      const closer = PAIRS[opener];
      const charAfter = value[start];

      // For quotes, don't auto-pair if we're right before a word character
      // (likely closing an existing string or mid-word apostrophe).
      const isQuote = opener === '"' || opener === "'";
      if (isQuote && /\w/.test(charAfter || "")) {
        return; // let the browser insert the raw character
      }

      e.preventDefault();
      const next = value.slice(0, start) + opener + closer + value.slice(end);
      commit(next, start + 1, start + 1, onChange);
      return;
    }

    // Typing a closing char right before the same char already there: skip over it.
    if (CLOSERS.has(e.key) && start === end && value[start] === e.key) {
      e.preventDefault();
      commit(value, start + 1, start + 1, onChange);
      return;
    }

    // Backspace between an auto-inserted pair (e.g. `(|)`): delete both.
    if (e.key === "Backspace" && start === end && start > 0) {
      const charBefore = value[start - 1];
      const charAfter = value[start];
      if (PAIRS[charBefore] === charAfter) {
        e.preventDefault();
        const next = value.slice(0, start - 1) + value.slice(start + 1);
        commit(next, start - 1, start - 1, onChange);
        return;
      }

      // Backspace inside leading indentation: delete a full 4-space tab
      // stop at once instead of a single space, so outdenting mirrors how
      // Tab indents. Only kicks in when everything from the start of the
      // line up to the cursor is spaces (i.e. we're still in the
      // indentation, not deleting inside actual code).
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const beforeCursor = value.slice(lineStart, start);
      if (beforeCursor.length > 0 && /^ +$/.test(beforeCursor)) {
        // Remove back to the previous multiple-of-4 column, capped by
        // whatever whitespace is actually there.
        const removeCount = beforeCursor.length % 4 === 0 ? 4 : beforeCursor.length % 4;
        const clamped = Math.min(removeCount, beforeCursor.length);
        e.preventDefault();
        const next = value.slice(0, start - clamped) + value.slice(start);
        commit(next, start - clamped, start - clamped, onChange);
        return;
      }
    }
  };

  // Re-evaluate suggestions after every change to the buffer (typing,
  // pasting, or any of the editor shortcuts above via commit()).
  const handleChange = (e) => {
    const el = e.target;
    onChange(el.value);
    // Selection hasn't moved from a plain typed character, so read it
    // straight off the element rather than waiting for a re-render.
    refreshSuggestions(el, el.value, el.selectionStart);
  };

  const handleClick = () => {
    closeSuggestions();
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

      <div className="code-input-wrap">
        <textarea
          ref={textareaRef}
          className="code-input"
          spellCheck={false}
          value={code}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onBlur={closeSuggestions}
          aria-label="code editor"
        />
        {/* Invisible measuring element used to compute caret pixel position
            for the autocomplete dropdown; never shown to the user. */}
        <div ref={mirrorRef} className="code-input-mirror" aria-hidden="true" />
        {suggestions.length > 0 && menuPos && (
          <ul
            className="autocomplete-menu"
            style={{ top: menuPos.top + 24, left: menuPos.left + 20 }}
          >
            {suggestions.map((word, i) => (
              <li
                key={word}
                className={i === activeIndex ? "active" : ""}
                onMouseDown={(e) => {
                  // onMouseDown (not onClick) so this fires before the
                  // textarea's onBlur closes the menu.
                  e.preventDefault();
                  acceptSuggestion(word);
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {word}
              </li>
            ))}
          </ul>
        )}
      </div>

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
