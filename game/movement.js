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

function setMovement(m) {
  movement = m;
}

function getMovement() {
  return movement;
}

const handleKeyPress = (s, key) => {
  switch (key.name) {
    case "w":
      setMovement(movements.up);
      break;
    case "a":
      setMovement(movements.left);
      break;
    case "s":
      setMovement(movements.down);
      break;
    case "d":
      setMovement(movements.right);
      break;
    case "up":
      setMovement(movements.up);
      break;
    case "left":
      setMovement(movements.left);
      break;
    case "down":
      setMovement(movements.down);
      break;
    case "right":
      setMovement(movements.right);
      break;
    case "c":
      if (key.ctrl) {
        // process.stdout.write("\x1Bc");
        process.exit();
      }
      break;
  }
};

process.stdin.on("keypress", handleKeyPress);

module.exports = { getMovement };
