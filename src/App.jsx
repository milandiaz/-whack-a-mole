import Field from "./Field";
import { useGameContext } from "./GameContext";

export default function App() {
  const { game, startGame, restartGame, time, score, high } = useGameContext();

  if (game === "welcome") {
    return (
      <div>
        <h1>Whack-a-Mole</h1>
        <p>
          Click the moles as fast as you can within 15 seconds to score points!
        </p>
        <p>Go fast to set the highest record in the table!</p>
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

  if (game == "over") {
    return (
      <div>
        <h1>Game Over!</h1>
        <p>Your Score is: {score}</p>
        <button onClick={restartGame}>Back to menu</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Whack-a-Mole</h1>
      <p>Score: {score}</p>
      <p>Time Left: {time}s</p>
      <Field />
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
