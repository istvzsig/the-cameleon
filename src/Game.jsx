import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoardComponent";
import Dice from "./components/Dice/DiceComponent";

import diceImage6 from "./assets/img/dice-6.png";
// import diceImage8 from "./assets/img/dice-8.png";

export default function Game() {
  const [players, setPlayer] = useState([]);
  return (
    <>
      <GameBoard />
      <Dice sides={6} image={diceImage6} />
      {/* <Dice sides={8} /> */}
    </>
  );
}
