import { useState } from "react";
import PropTypes from "prop-types";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function useRollingDice(sides) {
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

export default function Dice({ sides }) {
  const { number, rolling, rollDice } = useRollingDice(sides);

  return (
    // TODO: Change onclick to player turn
    <div className="Dice" onClick={rollDice}>
      <h1>{rolling ? "Rolling..." : `You rolled a ${number}`}</h1>
      <div className={`dice ${rolling ? "rolling" : ""}`}>
        <div className="face">{number}</div>
      </div>
    </div>
  );
}

Dice.propTypes = {
  sides: PropTypes.number,
};
