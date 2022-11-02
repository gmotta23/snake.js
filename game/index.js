const { get_movement } = require("./movement");

function start() {
  setInterval(() => {
    movement = get_movement();
    process.stdout.write("\x1Bc");
    process.stdout.write(movement);
  }, 200);
}

start();
