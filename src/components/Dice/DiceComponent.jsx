import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useRollingDice } from "./hook";
import './dice.css';

const faces = {
  1: { sX: 100, sY: 0 },
  2: { sX: 0, sY: 100 },
  3: { sX: 100, sY: 100 },
  4: { sX: 100, sY: 300 },
  5: { sX: 200, sY: 100 },
  6: { sX: 100, sY: 200 },
}

function DiceFace({ number, imageUrl, rollDice }) {
  const ref = useRef();

  function draw() {
    rollDice();
    if (number) {
      const canvas = ref.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        const img = new Image();

        img.src = imageUrl;
        img.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(
            img, // Source image
            faces[number].sX, faces[number].sY, // sX, sY
            canvas.width, canvas.height, // sW, sH
            0, 0, // dX, dY
            canvas.width, canvas.height // dW, dH
          );
        };
      }
    }
  }

  useEffect(() => {
    draw();
  }, [imageUrl]);

  return <canvas onClick={draw} width={100} height={100} ref={ref} className="face"></canvas>;
}

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
