const fs = require('fs')
const data = fs.readFileSync('./03/input.txt', 'utf8');
const findMul = /mul\((\d+),(\d+)\)/g;
const array = [...data.matchAll(findMul)];
const multArray=[]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  const testcalc = parseInt(element[1])*parseInt(element[2])
  multArray.push(testcalc)
}
let sum = multArray.reduce(function (x, y) {
    return x + y;
}, 0);
console.log(sum);