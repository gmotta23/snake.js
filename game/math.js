const randomCoordinate = (rows, columns) => {
  const row = random(0, rows);
  const column = random(0, columns);
  return [row, column];
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = { randomCoordinate };
