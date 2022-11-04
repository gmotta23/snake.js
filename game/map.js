const rows = 22;
const columns = 80;
const snakePosition = {
  head: [1, 2],
  body: [1, 1],
};
const applePosition = [2, 2];

function drawMap(movement) {
  const map = [];

  for (let row = 0; row <= rows; row++) {
    map.push([]);
    for (let column = 0; column <= columns; column++) {
      const cell = handleCellDraw(row, column);
      map[row].push(cell);
    }
  }

  return mapToString(map);
}

function setSnakePosition(movement) {
  // get snake position
  // update snake position
  // set snakePosition
}

function getSnakePosition() {
  return snakePosition;
}

function getApplePosition() {
  return [3, 3];
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
  const snakePosition = getSnakePosition();
  const head = "@";
  const body = "o";

  if (snakePosition.head[0] === row && snakePosition.head[1] === column) {
    return head;
  }
  if (snakePosition.body[0] === row && snakePosition.body[1] === column) {
    return body;
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
