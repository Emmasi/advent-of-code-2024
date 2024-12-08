let array = {
  190: [10, 19],
  3267: [81, 40, 27],
  83: [17, 5],
  156: [15, 6],
  7290: [6, 8, 6, 15],
  161011: [16, 10, 13],
  192: [17, 8, 14],
  21037: [9, 7, 18, 13],
  292: [11, 6, 16, 20],
};
const fs = require('fs')
const data = fs.readFileSync('./07/input.txt', 'utf8').trim().split("\n").reduce((obj, line) => {
  const [key, ...values] = line.split(/[:\s]+/); // Dela upp vid kolon och mellanslag
  obj[key] = values.map(Number); // Omvandla värden till nummer och lägg till i objektet
  return obj;
}, {});

let successfulKeys = [];

function canReachTarget(obj) {
  for (const key in obj) {
    const targetSum = Number(key);
    const numbers = obj[key];
    const isPossible = CheckComb(numbers, targetSum);
    if (isPossible) {
      successfulKeys.push(targetSum); 
    }
  }
}

function CheckComb(numbers, target) {
  const ops = ["+", "*"]; 
  const n = numbers.length;

  const operators = (length) =>
    Array.from({ length: Math.pow(ops.length, length) }, (_, i) =>
      i
        .toString(ops.length)
        .padStart(length, "0")
        .split("")
        .map((x) => ops[parseInt(x, ops.length)])
    );

  const operatorsCombinations = operators(n - 1);

  for (const operators of operatorsCombinations) {
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const number = numbers[i + 1];
      if (operator === "+") result += number;
      else if (operator === "*") result *= number;
    }
    if (result === target) {
      return true;
    }
  }
  return false;
}

canReachTarget(data);
const totalSum = successfulKeys.map(Number).reduce((sum, num) => sum + num, 0);
console.log("Summan av successfulKeys:", totalSum);
