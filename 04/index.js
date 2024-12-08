const fs = require('fs');
const arrays = fs.readFileSync('./04/input.txt', 'utf8').trim().split("\n").map(line => line.split(""));
let sum = 0;
function checkDirection(x, y, dx, dy, arrays) {
  if (
    arrays[x + dx]?.[y + dy] === "M" &&
    arrays[x + 2 * dx]?.[y + 2 * dy] === "A" &&
    arrays[x + 3 * dx]?.[y + 3 * dy] === "S"
  ) {
    return true;
  }
  return false;
}
for (let x = 0; x < arrays.length; x++) {
  for (let y = 0; y < arrays[x].length; y++) {
    const current = arrays[x][y];
    if (current === "X") {
      const directions = [
        { dx: -1, dy: 0 },  // Above
        { dx: -1, dy: -1 }, // AboveLeft
        { dx: -1, dy: 1 },  // AboveRight
        { dx: 1, dy: -1 },  // BelowLeft
        { dx: 1, dy: 0 },   // Below
        { dx: 1, dy: 1 },   // BelowRight
        { dx: 0, dy: 1 },   // Next
        { dx: 0, dy: -1 },  // Previous
      ];

      for (const { dx, dy } of directions) {
        if (checkDirection(x, y, dx, dy, arrays)) {
          sum++;
        }
      }
    }
  }
}

console.log(sum);
