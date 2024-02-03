let board;
let context;
let cols = 10;
let rows = 25;
let blockSize = 30;

let snakeX = blockSize * 0;
let snakeY = blockSize * 0;
let moveX = 0;
let moveY = 0;
let Body = [];

let appleX;
let appleY;

let gameOver = false;

function refreshGame() {
  location.reload();
}

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");
  foodRandom();
  document.addEventListener("keyup", ChangeDirections);
  setInterval(Update, 100);
};

function Update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(appleX, appleY, blockSize, blockSize);

  if (snakeX === appleX && snakeY === appleY) {
    Body.push([appleX, appleY]);
    foodRandom();
  }
  for (let i = Body.length - 1; i > 0; i--) {
    Body[i] = Body[i - 1];
  }
  if (Body.length) {
    Body[0] = [snakeX, snakeY];
  }

  context.fillStyle = "green";
  snakeX += moveX * blockSize;
  snakeY += moveY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < Body.length; i++) {
    context.fillRect(Body[i][0], Body[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX >= cols * blockSize ||
    snakeY < 0 ||
    snakeY >= rows * blockSize
  ) {
    gameOver = true;
    alert("GAME OVER PUPSIK!");
    refreshGame();
  }
  for (let i = 1; i < Body.length; i++) {
    if (snakeX === Body[i][0] && snakeY === Body[i][1]) {
      gameOver = true;
      alert("GAME OVER PUPSIK!");
      refreshGame();
    }
  }
}

function ChangeDirections(e) {
  if ((e.code === "ArrowUp" || e.key === "w") && moveY !== 1) {
    moveX = 0;
    moveY = -1;
  } else if ((e.code === "ArrowDown" || e.key === "s") && moveY !== -1) {
    moveX = 0;
    moveY = 1;
  } else if ((e.code === "ArrowLeft" || e.key === "a") && moveX !== 1) {
    moveX = -1;
    moveY = 0;
  } else if ((e.code === "ArrowRight" || e.key === "d") && moveX !== -1) {
    moveX = 1;
    moveY = 0;
  }
}

function foodRandom() {
  appleX = Math.floor(Math.random() * cols) * blockSize;
  appleY = Math.floor(Math.random() * rows) * blockSize;
}
