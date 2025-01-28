import { useEffect, useRef, useState } from "react";

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

export function useDice({ numOfSides, imageUrl }) {
    const [number, setNumber] = useState(getRandomNumber(numOfSides));
    const [rolling, setRolling] = useState(false);

    const ref = useRef();

    function draw() {
        const faceSources = {
            1: { sX: 100, sY: 0 },
            2: { sX: 0, sY: 100 },
            3: { sX: 100, sY: 100 },
            4: { sX: 100, sY: 300 },
            5: { sX: 200, sY: 100 },
            6: { sX: 100, sY: 200 },
            7: { sX: 0, sY: 400 },
            8: { sX: 200, sY: 400 },
        };

        const canvas = ref.current;

        if (canvas && number) {
            const context = canvas.getContext("2d");
            const img = new Image();

            const sX = faceSources[number].sX;
            const sY = faceSources[number].sY;
            const w = canvas.width;
            const h = canvas.height;

            img.src = imageUrl;
            img.onload = () => {
                context.clearRect(0, 0, w, h);
                context.drawImage(img, sX, sY, w, h, 0, 0, w, h);
            };
        }
    }

    function roll() {
        if (numOfSides <= 0) {
            console.error("Number of sides must be greater than 0");
            return;
        }
        const randomRoll = getRandomNumber(numOfSides);
        setNumber(randomRoll);
        draw();
    }

    return {
        number,
        setNumber,
        rolling,
        setRolling,
        roll,
        numOfSides,
        draw,
        ref,
        numOfSides,
        imageUrl
    };
}