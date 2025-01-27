import { useState } from "react";

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

export function useRollingDice({ numOfSides }) {
    const [number, setNumber] = useState(getRandomNumber(numOfSides));
    const [rolling, setRolling] = useState(false);

    function rollDice() {
        if (numOfSides <= 0) {
            console.error("Number of sides must be greater than 0");
            return;
        }
        const randomRoll = getRandomNumber(numOfSides);
        setRolling(true);
        setNumber(randomRoll);
        setRolling(false);
    }

    return { number, setNumber, rolling, setRolling, rollDice, numOfSides };
}