export default function TopBar({ solved, total }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-dot"></span>
        <span className="brand-text">
          PassGaram<span className="brand-blink">.</span>meow
        </span>
      </div>
      <div className="progress" title="questions completed">
        {solved}/{total} questions
      </div>
    </header>
  );
}
