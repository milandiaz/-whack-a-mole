import { createContext, useContext, useState, useRef, useEffect } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [game, setGame] = useState("welcome");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [high, setHigh] = useState([]);
  const [molePosition, setMolePosition] = useState(null);
  const intervalRef = useRef(null);

  const holes = 9;

  const startGame = () => {
    setScore(0);
    setTime(15);
    setGame("playing");
    molePlacing();

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          if (score > 0) {
            setHigh((prevHigh) =>
              [...prevHigh, score].sort((a, b) => b - a).slice(0, 5)
            );
          }
          setGame("over");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const molePlacing = () => {
    setMolePosition((prev) => {
      let newPosition = Math.floor(Math.random() * holes);
      while (newPosition == prev) {
        newPosition = Math.floor(Math.random() * holes);
      }
      return newPosition;
    });
  };

  const restartGame = () => {
    if (score > 0 && game == "over") {
      setHigh((prev) => [...prev, score]);
    }
    clearInterval(intervalRef.current);
    setGame("welcome");
  };

  const mole = (index) => {
    if (game != "playing" || index !== molePosition) return;
    setScore((prev) => prev + 1);
    molePlacing();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        score,
        high,
        time,
        molePosition,
        startGame,
        restartGame,
        mole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
