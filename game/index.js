const { getMovement } = require("./movement");
const { drawMap } = require("./map");

function start() {
  setInterval(() => {
    movement = getMovement();
    process.stdout.write("\x1Bc");
    process.stdout.write(drawMap(movement));
  }, 100);
}

start();
