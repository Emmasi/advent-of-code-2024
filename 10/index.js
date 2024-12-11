const fs = require('fs');
const data = fs.readFileSync('./10/input.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('').map(Number));

  const arrays = [
    [8, 9, 0, 1, 0, 1, 2, 3],
    [7, 8, 1, 2, 1, 8, 7, 4],
    [8, 7, 4, 3, 0, 9, 6, 5],
    [9, 6, 5, 4, 9, 8, 7, 4],
    [4, 5, 6, 7, 8, 9, 0, 3],
    [3, 2, 0, 1, 9, 0, 1, 2],
    [0, 1, 3, 2, 9, 8, 0, 1],
    [1, 0, 4, 5, 6, 7, 3, 2],
  ];

function getNeighbors(arrs, x, y) {
  const neighbors = [];
  if (x > 0) neighbors.push({x: x-1, y: y});
  if (x < arrs[y].length - 1) neighbors.push({x: x+1, y: y});
  if (y > 0) neighbors.push({x: x, y: y-1});
  if (y < arrs.length - 1) neighbors.push({x: x, y: y+1});
  return neighbors;
}

function findPath(arrs, x, y, target, visited) {
  const posKey = `${x},${y}`;
  if (visited.has(posKey)) return new Set();
  if (arrs[y][x] === target) {
    visited.add(posKey);
    if (target === 9) {
      visited.delete(posKey);
      return new Set([posKey]);
    }
    const neighbors = getNeighbors(arrs, x, y);
    let reachableNines = new Set();
    for (const n of neighbors) {
      if (arrs[n.y][n.x] === target+1) {
        const nextNines = findPath(arrs, n.x, n.y, target+1, visited);
        for (const ninePos of nextNines) {
          reachableNines.add(ninePos);
        }
      }
    }
    visited.delete(posKey);
    return reachableNines;
  }

  return new Set();
}

const allScores = [];

function findTrails(arrs) {
  for (let y = 0; y < arrs.length; y++) {
    for (let x = 0; x < arrs[y].length; x++) {
      if (arrs[y][x] === 0) {
        const visited = new Set();
        const reachableNines = findPath(arrs, x, y, 0, visited);
        const score = reachableNines.size;
        allScores.push(score);
      }
    }
  }
}

findTrails(arrays);
console.log("alla poäng:", allScores);
console.log("summa av poäng:", allScores.reduce((a, b) => a + b, 0));
