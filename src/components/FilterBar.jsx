const DIFFICULTIES = [
  { id: "all", label: "All" },
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

export default function FilterBar({
  year,
  difficulty,
  years,
  yearCounts,
  diffCounts,
  onYearChange,
  onDifficultyChange,
}) {
  return (
    <div className="filter-bar coding-filters">
      <label className="filter-field">
        <span className="filter-label">YEAR</span>
        <select
          className="filter-select"
          value={String(year)}
          onChange={(e) => onYearChange(e.target.value)}
          aria-label="filter by year"
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
        <span className="filter-label">DIFFICULTY</span>
        <select
          className="filter-select"
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          aria-label="filter by difficulty"
        >
          {DIFFICULTIES.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label} ({diffCounts[d.id] ?? 0})
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
