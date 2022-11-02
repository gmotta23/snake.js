const readline = require("readline");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const movements = Object.freeze({
  up: "up",
  right: "right",
  down: "down",
  left: "left",
});

let movement = movements.up;

function set_movement(m) {
  movement = m;
}

function get_movement() {
  return movement;
}

const handleKeyPress = (s, key) => {
  switch (key.name) {
    case "w":
      set_movement(movements.up);
      break;
    case "a":
      set_movement(movements.left);
      break;
    case "s":
      set_movement(movements.down);
      break;
    case "d":
      set_movement(movements.right);
      break;
    case "c":
      if (key.ctrl) {
        process.exit();
      }
      break;
  }
};

process.stdin.on("keypress", handleKeyPress);

module.exports = { get_movement };
