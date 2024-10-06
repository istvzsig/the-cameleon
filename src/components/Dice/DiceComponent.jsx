import PropTypes from "prop-types";
import { useRollingDice } from "./hook";
import "./dice.css";

export default function Dice({ sides, image }) {
  const { number, rolling, rollDice } = useRollingDice(sides);

  function updateBackgroundImage() {
    return {
      width: "200px",
      height: 200,
      backgroundImage: `url(${image})`,
    };
  }

  console.log({ number });

  return (
    // TODO: Change onclick to player turn
    <div>
      <h1>{rolling ? "Rolling..." : "Click To Roll"}</h1>
      <div onClick={rollDice} className={`dice ${rolling ? "rolling" : ""}`}>
        <div
          className="dice--image"
          data-side={number}
          style={updateBackgroundImage()}
        ></div>
      </div>
    </div>
  );
}

Dice.propTypes = {
  sides: PropTypes.number,
  image: PropTypes.string,
};
