export default function Toast({ message }) {
  return <div className={`toast ${message ? "show" : ""}`}>{message}</div>;
}
