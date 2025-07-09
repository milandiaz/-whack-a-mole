import { useGameContext } from "./GameContext";

export default function Field() {
  const { molePosition, mole } = useGameContext();
  const NUM_HOLES = 9;

  return (
    <ul className="field">
      {Array.from({ length: NUM_HOLES }).map((_, i) => (
        <li
          key={i}
          className={`hole${i === molePosition ? " mole" : ""}`}
          onClick={() => mole(i)}
        ></li>
      ))}
    </ul>
  );
}
