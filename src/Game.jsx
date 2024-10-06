import { useState } from "react";

export default function Game() {
  const [players, setPlayer] = useState([]);
  return <GameBoard />;
}
