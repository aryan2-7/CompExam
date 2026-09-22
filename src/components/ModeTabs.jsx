import { NavLink } from "react-router-dom";

export default function ModeTabs() {
  return (
    <div className="mode-tabs" role="tablist" aria-label="practice mode">
      <NavLink
        to="/coding"
        className={({ isActive }) => `mode-tab${isActive ? " active" : ""}`}
        role="tab"
      >
        CODE
      </NavLink>
      <NavLink
        to="/theory"
        className={({ isActive }) => `mode-tab${isActive ? " active" : ""}`}
        role="tab"
      >
        THEORY
      </NavLink>
      <NavLink
        to="/mcq"
        className={({ isActive }) => `mode-tab${isActive ? " active" : ""}`}
        role="tab"
      >
        MCQ
      </NavLink>
    </div>
  );
}
