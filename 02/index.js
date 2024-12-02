const fs = require('fs')
const data = fs.readFileSync('./02/input.txt', 'utf8').trim().split('\n').map(row => row.trim().split(/\s+/).map(Number));

let safeNum = 0

data.forEach(rowArray => {
  const firstArrays = checkType(rowArray)
  const allArray=checkLevels(firstArrays)
  if(allArray != null){
    safeNum++
  }
});
function checkType(arr) {
  const isAscending = arr.every((val, i, array) => i === 0 || val > array[i - 1]);
  const isDescending = arr.every((val, i, array) => i === 0 || val < array[i - 1]);
  if (isAscending || isDescending) {
    return arr; 
  }
  return; 
}
function checkLevels(arr) {
  if(arr==null){
    return
  }
  for (let i = 1; i < arr.length; i++) {
    const gap = Math.abs(arr[i - 1] - arr[i]); 
    if (gap > 3 || gap === 0) {
      return null; 
    }
  }
  return arr
}
console.log(safeNum)