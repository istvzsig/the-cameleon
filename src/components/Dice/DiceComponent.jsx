import PropTypes from "prop-types";
import { useRollingDice } from "./hook";
import './dice.css';
import { DiceFace } from "./DiceFace";


export default function Dice({ numOfSides, imageUrl }) {
  const { number, rollDice } = useRollingDice({ numOfSides: numOfSides });
  return (
    // TODO: Change onclick to player turn
    <div className="dice" onClick={rollDice}>
      <DiceFace number={number} imageUrl={'/dice-6.png'} rollDice={rollDice} />
    </div>
  );
}

Dice.propTypes = {
  sides: PropTypes.number,
};
