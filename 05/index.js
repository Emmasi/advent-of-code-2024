const fs = require('fs');
const data = fs.readFileSync('./05/input.txt', 'utf8');

function parseInput(input) {
  const lines = input.trim().split('\n');
  const rules = [];
  const updates = [];
  let isUpdateSection = false;

  for (const line of lines) {
    if (line.includes('|')) {
      rules.push(line.split('|').map(Number)); 
    } else {
      updates.push(line.split(',').map(Number)); 
    }
  }

  return { rules, updates };
}
function isValidUpdate(update, rules) {
  for (const [x, y] of rules) {
    if (update.includes(x) && update.includes(y)) {
      if (update.indexOf(x) > update.indexOf(y)) {
        return false;
      }
    }
  }
  return true;
}

function findMiddleNum(update) {
  const middleIndex = Math.floor(update.length / 2);
  return update[middleIndex];
}

function solve(input) {
  const { rules, updates } = parseInput(input);

  let middleSum = 0;
  const validUpdates = [];

  for (const update of updates) {
    if (isValidUpdate(update, rules)) {
      validUpdates.push(update);
      middleSum += findMiddleNum(update);
    }
  }
  return { middleSum, validUpdates };
}
  const { middleSum, validUpdates } = solve(data);
  console.log("Sum of middle numbers:", middleSum);

