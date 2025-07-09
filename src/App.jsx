import Field from "./Field";
import { useGameContext } from "./GameContext";

export default function App() {
  const { game, startGame, restartGame, time, score, high } = useGameContext();

  if (game === "welcome") {
    return (
      <div>
        <h1>Whack-a-Mole</h1>
        <button onClick={startGame}>Play</button>
        {high.length > 0 && (
          <div>
            <h2>High Scores:</h2>
            <ul>
              {high.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Whack-a-Mole</h1>
      <p>Score: {score}</p>
      <Field />
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
