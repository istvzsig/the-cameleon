import PropTypes from "prop-types";
import { useDice } from "./hook";
import { DiceFace } from "./DiceFace";
import './dice.css';

export default function Dice({ numOfSides }) {
  const imageUrl = numOfSides === 6 ? '/dice-6.png' : '/dice-8.png';
  const { roll, ref } = useDice({ numOfSides, imageUrl });

  return (
    // TODO: Change onclick to player turn
    <div className="dice" onClick={roll} >
      <canvas width={100} height={100} ref={ref}></canvas >
    </div>
  );
}

Dice.propTypes = {
  sides: PropTypes.number,
};