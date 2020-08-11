import { getInputDirection } from "./input.js";
import { GRID_SIZE } from "./game.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }]

export function update () {
    const inputDirection = getInputDirection();

    if ( snakeBody.length - 2 >= 0) {
        for (let i = snakeBody.length - 2; i >=  0; i--) {
            snakeBody[i + 1] =  { ...snakeBody[i] };
        }
    }    

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw (gameBoard) {
    snakeBody.forEach(segment => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = segment.y;
        snakeSegment.style.gridColumnStart = segment.x;
        snakeSegment.classList.add('snake');
        gameBoard.appendChild(snakeSegment);
    })
}

export function expandSnake (amount) {
    for (let i = 1; i <= amount; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
}

export function onSnake (position, ignoreHead = false) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) {
            return false;
        }
            
        return segment.x === position.x && segment.y === position.y;
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeOutOfBoard(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
        );
}

export function snakeSegmentIntersection(position) {
    let ignoreHead = true;
    return onSnake(position, ignoreHead);
}