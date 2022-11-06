const { randomCoordinate } = require("./math");
const { movements } = require("./movement");

const rows = process.stdout.rows;
const columns = process.stdout.columns;
const snakeHead = randomCoordinate(rows, columns);
const snakePosition = {
  position: snakeHead,
  next: {
    position: [snakeHead[0], snakeHead[1] + 1],
    next: null,
  },
};
const applePosition = [2, 2];

function drawMap(movement) {
  const map = [];
  setSnakePosition(movement);

  for (let row = 0; row <= rows; row++) {
    map.push([]);
    for (let column = 0; column <= columns; column++) {
      const cell = handleCellDraw(row, column);
      map[row].push(cell);
    }
  }

  return mapToString(map);
}

function getSnakeDirection(movement) {
  let direction = [0, 1];
  switch (movement) {
    case movements.up:
      direction = [-1, 0];
      break;
    case movements.right:
      direction = [0, 1];
      break;
    case movements.down:
      direction = [1, 0];
      break;
    case movements.left:
      direction = [0, -1];
  }
  return direction;
}

function setSnakePosition(movement) {
  const direction = getSnakeDirection(movement);

  updateBodyPosition();
  setSnakeHeadPosition(direction);
}

function updateBodyPosition() {
  let snakeSnapshot = JSON.parse(JSON.stringify(snakePosition));

  let key = snakePosition.next;

  while (key) {
    key.position = snakeSnapshot.position;
    key = key.next;
    snakeSnapshot = snakeSnapshot.next;
  }
}

function setSnakeHeadPosition(direction) {
  snakePosition.position[0] += direction[0];
  snakePosition.position[1] += direction[1];

  if (snakePosition.position[0] > rows) {
    snakePosition.position[0] = 0;
  }

  if (snakePosition.position[0] < 0) {
    snakePosition.position[0] = rows;
  }

  if (snakePosition.position[1] > columns) {
    snakePosition.position[1] = 0;
  }

  if (snakePosition.position[1] < 0) {
    snakePosition.position[1] = columns;
  }
}

function getSnakePosition() {
  return snakePosition;
}

function setApplePosition() {
  // return applePosition;
}

function getApplePosition() {
  return applePosition;
}

function handleCellDraw(row, column) {
  let cell = " ";

  const snake = handleCellDrawSnake(row, column);

  if (snake) return snake;

  const apple = handleCellDrawApple(row, column);

  if (apple) return apple;

  return cell;
}

function handleCellDrawSnake(row, column) {
  const snakePosition = JSON.parse(JSON.stringify(getSnakePosition()));
  const head = "@";
  const body = "o";

  if (
    snakePosition.position[0] === row &&
    snakePosition.position[1] === column
  ) {
    return head;
  }

  while (snakePosition.next) {
    if (
      snakePosition.next.position[0] === row &&
      snakePosition.next.position[1] === column
    ) {
      return body;
    }
    snakePosition.next = snakePosition.next.next;
  }
  return null;
}

function handleCellDrawApple(row, column) {
  const applePosition = getApplePosition();
  const apple = "$";

  if (applePosition[0] === row && applePosition[1] === column) {
    return apple;
  }

  return null;
}

function mapToString(map) {
  let map_string = "";
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      map_string += map[row][column];
    }
    map_string += "\n";
  }
  return map_string;
}

module.exports = { drawMap };
