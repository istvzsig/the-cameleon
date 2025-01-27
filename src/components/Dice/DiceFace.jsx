import { useRef, useEffect } from "react";

export function DiceFace({ number, imageUrl, rollDice }) {
    const ref = useRef();

    const faceSources = {
        1: { sX: 100, sY: 0 },
        2: { sX: 0, sY: 100 },
        3: { sX: 100, sY: 100 },
        4: { sX: 100, sY: 300 },
        5: { sX: 200, sY: 100 },
        6: { sX: 100, sY: 200 },
    };

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
                        faceSources[number].sX, faceSources[number].sY, // sX, sY
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
