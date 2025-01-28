import Dice from "../Dice/DiceComponent";

const SixSidedDice = () => <Dice numOfSides={6} />
const EightSidedDice = () => <Dice numOfSides={8} />

// eslint-disable-next-line no-unused-vars
export default function GameBoard() {
  return (
    <div className="game--board">
      <h1>GameBoard Component</h1>
      <SixSidedDice />
      <EightSidedDice />
    </div>
  );
}
