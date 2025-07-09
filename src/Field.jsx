export default function Field() {
  const NUM_HOLES = 9;
  // Pick a random index for the mole
  const moleIndex = Math.floor(Math.random() * NUM_HOLES);

  return (
    <ul className="field">
      {Array.from({ length: NUM_HOLES }).map((_, i) => (
        <li key={i} className={`hole${i === moleIndex ? " mole" : ""}`}></li>
      ))}
    </ul>
  );
}
