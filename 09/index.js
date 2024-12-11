const fs = require('fs');
const data = fs.readFileSync('./09/input.txt', 'utf8').split('');

let counter = -1;
const newArray = [];
for (let i = 0; i < data.length; i++) {
  if (i % 2 === 0) {
    counter++;
    for (let j = 0; j < data[i]; j++) {
      newArray.push(counter);
    }
  } else {
    for (let j = 0; j < data[i]; j++) {
      newArray.push("*");
    }
  }
}
function rearrange(arr) {
  while (true) {
    const starIndex = arr.indexOf('*');
    if (starIndex === -1) {
      break;
    }
    let digitIndex = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i] === 'number') {
        digitIndex = i;
        break;
      }
    }
    if (digitIndex === -1 || digitIndex < starIndex) {
      break;
    }
    arr[starIndex] = arr[digitIndex];
    arr[digitIndex] = '*';
  }

  return arr;
}

const result = rearrange(newArray);

const sumArr = [];
function multiNum(res) {
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== "*") {
      console.log(res[i], "*", i);
      sumArr.push(res[i] * i);
    }
  }
}

multiNum(result);

console.log(sumArr);
console.log(sumArr.reduce((a, b) => a + b, 0));
