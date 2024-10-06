import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoardComponent";
import Dice from "./components/Dice/DiceComponent";

export default function Game() {
  const [players, setPlayer] = useState([]);
  return (
    <>
      <GameBoard />
      <Dice sides={6} />
      <Dice sides={8} />
    </>
  );
}
