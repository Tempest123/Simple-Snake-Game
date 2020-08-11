let inputDirection = { x: 0, y: 0 };
let previousDirection = { x: 0, y: 0 };

window.addEventListener ('keydown', keyPressed => {
    switch (keyPressed.key) {
        case 'ArrowUp':
            if (previousDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (previousDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (previousDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (previousDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
})

export function getInputDirection () {
    previousDirection = inputDirection;
    return inputDirection;
}