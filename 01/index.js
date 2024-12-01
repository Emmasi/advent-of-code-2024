const fs = require('fs')
const data = fs.readFileSync('./01/input.txt', 'utf8').trim().split('\n').flatMap(row=>row.trim().split(/\s+/).map(Number))

let even  = data.filter((v, i) => i % 2).sort()
let odd = data.filter((v, i) => !(i % 2)).sort()

const compArray =[]

for (let i = 0; i < odd.length; i++) {
  compArray.push(Math.abs(odd[i]-even[i]))
}
console.log(compArray.reduce((a, b) => a + b, 0));