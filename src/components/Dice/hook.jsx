import { useState } from "react";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function useRollingDice(sides) {
  const [number, setNumber] = useState(getRandomNumber(sides));
  const [rolling, setRolling] = useState(false);

  function rollDice() {
    if (sides <= 0) {
      console.error("Number of sides must be greater than 0");
      return;
    }
    const randomRoll = getRandomNumber(sides);
    setRolling(true);
    setTimeout(() => {
      setNumber(randomRoll);
      setRolling(false);
    }, 1000);
  }
  return { number, setNumber, rolling, setRolling, rollDice };
}
