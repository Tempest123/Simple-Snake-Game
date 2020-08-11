import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeOutOfBoard, snakeSegmentIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js'

const gameBoard = document.getElementById('game-board');
export const GRID_SIZE = 21;
let GAME_OVER = false;

let previousRenderTime = 0;

function main (currentTime) {
    if (GAME_OVER) {
        if (confirm("Game over. Press 'Ok' to restart")) {
            window.location = "/";
        }
        return;
    }

    window.requestAnimationFrame(main);
    const elapsedTime = (currentTime - previousRenderTime) / 1000;
    if (elapsedTime < 1 / SNAKE_SPEED) return

    previousRenderTime = currentTime;
    
    update();
    draw();
}

window.requestAnimationFrame(main);

function update () {    
    updateFood();
    updateSnake();
    checkDead();
}

function draw () {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDead () {
    let snakeHeadPosition = getSnakeHead();
    if (snakeOutOfBoard(snakeHeadPosition) || snakeSegmentIntersection(snakeHeadPosition))
        GAME_OVER = true;
}

