const TABS = [
  { id: "all", label: "All" },
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

export default function DifficultyTabs({ tab, counts, onChange }) {
  return (
    <div className="diff-tabs" role="tablist">
      {TABS.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={tab === t.id}
          className={`diff-tab ${tab === t.id ? "active" : ""} ${t.id !== "all" ? `is-${t.id}` : ""}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
          <span className="tab-count">{counts[t.id]}</span>
        </button>
      ))}
    </div>
  );
}
