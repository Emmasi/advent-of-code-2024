const fs = require('fs')
const data = fs.readFileSync('./01/input.txt', 'utf8').trim().split('\n').flatMap(row=>row.trim().split(/\s+/).map(Number))

let right = data.filter((v, i) => i % 2)
let left = data.filter((v, i) => !(i % 2))
let arrSum=[]

left.forEach(leftNum => {
  let findNum = right.filter((rightNum) => rightNum == leftNum)
  let sum= leftNum*findNum.length
  arrSum.push(sum)
});
console.log(arrSum.reduce((a, b) => a + b, 0))