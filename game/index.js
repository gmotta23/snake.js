const { getMovement } = require("./movement");
const { drawMap } = require("./map");

function start() {
  setInterval(() => {
    movement = getMovement();
    process.stdout.write("\x1Bc");
    // drawMap(movement);
    process.stdout.write(drawMap(movement));
  }, 200);
}

start();
