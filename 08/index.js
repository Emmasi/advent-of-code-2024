const fs = require('fs');
const map = fs.readFileSync('./08/input.txt', 'utf8').split('\n').map(line => line.trim());
function solve(mapLines) {
  const height = mapLines.length;
  const width = mapLines[0].length;
  const antennas = {};
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const ch = mapLines[y][x];
      if (ch.match(/[0-9a-zA-Z]/)) {
        if (!antennas[ch]) antennas[ch] = [];
        antennas[ch].push({ x, y });
      }
    }
  }
  const nodes = new Set();
  for (const freq in antennas) {
    const arr = antennas[freq];
    if (arr.length < 2) continue;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const p1 = arr[i];
        const p2 = arr[j];
        const aX = 2 * p1.x - p2.x;
        const aY = 2 * p1.y - p2.y;
        const bX = 2 * p2.x - p1.x;
        const bY = 2 * p2.y - p1.y;
        if (aX >= 0 && aX < width && aY >= 0 && aY < height) {
          nodes.add(`${aX},${aY}`);
        }
        if (bX >= 0 && bX < width && bY >= 0 && bY < height) {
          nodes.add(`${bX},${bY}`);
        }
      }
    }
  }
  return nodes.size;
}
let result = solve(map);
console.log(result);



