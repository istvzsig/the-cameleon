import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoardComponent";

export default function Game() {
  const [players, setPlayer] = useState([]);
  return (
    <>
      <GameBoard />
    </>
  );
}
