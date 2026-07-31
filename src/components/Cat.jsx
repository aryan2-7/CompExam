import catSprite from "../assets/cat-sprite.png";

// Mood classes map to sprite-sheet animations defined in index.css:
//   idle  -> rows 0-1 (8-frame standing loop)
//   run   -> rows 2-3 (8-frame walk cycle)
//   pass  -> row 8   (8-frame play/jump)
//   fail  -> row 4   (8-frame sit/lie-down)
//   error -> row 9   (8-frame tail/stretch)
//   sleep -> row 6   (4-frame sleeping loop)
export default function Cat({ mood, message }) {
  return (
    <div className="cat-corner">
      {message && <div className="cat-speech show">{message}</div>}
      <div className="lamp"></div>
      <div
        className={`cat-sprite ${mood}`}
        style={{ backgroundImage: `url(${catSprite})` }}
        aria-hidden="true"
      />
    </div>
  );
}
