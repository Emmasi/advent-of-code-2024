const fs = require('fs')
const arrays = fs.readFileSync('./04/input.txt', 'utf8').trim().split("\n").map(line => line.split(""));
let sum = 0

for (let x = 0; x < arrays.length; x++) {
  for (let y = 0; y < arrays[x].length; y++) {
    const current = arrays[x][y];
    if (current == "X") {
      const above = arrays[x - 1]?.[y]
      if (above == "M") {
        if(arrays[x-2]?.[y]=="A"){
          if(arrays[x-3]?.[y]=="S"){
            sum ++;
          }
        }
      }
      const aboveLeft = arrays[x - 1]?.[y - 1];
      if (aboveLeft == "M") {
        if(arrays[x-2]?.[y-2]=="A"){
          if(arrays[x-3]?.[y-3]=="S"){
            sum ++
          }
        }
      }
      const aboveRight = arrays[x - 1]?.[y + 1];
      if (aboveRight=="M") {
        if(arrays[x-2]?.[y+2]=="A"){
          if(arrays[x-3]?.[y+3]=="S"){
            sum ++
          }
        }
      }
      const belowLeft = arrays[x + 1]?.[y - 1];
      if (belowLeft=="M") {
        if(arrays[x+2]?.[y-2]=="A"){
          if(arrays[x+3]?.[y-3]=="S"){
            sum ++
          }
        }
      }
      const below = arrays[x + 1]?.[y];
      if (below=="M") {
        if(arrays[x+2]?.[y]=="A"){
          if(arrays[x+3]?.[y]=="S"){
            sum ++
          }
        }
      }
      const belowRight = arrays[x + 1]?.[y + 1];
      if (belowRight=="M") {
        if(arrays[x+2]?.[y+2]=="A"){
          if(arrays[x+3]?.[y+3]=="S"){
            sum ++;
          }
        }
      }
      const next = arrays[x]?.[y + 1];
      if (next=="M") {
        if(arrays[x]?.[y+2]=="A"){
          if(arrays[x]?.[y+3]=="S"){
            sum ++
          }
        }
      }
      const prev = arrays[x]?.[y - 1];
      if (prev=="M") {
        if(arrays[x]?.[y-2]=="A"){
          if(arrays[x]?.[y-3]=="S"){
            sum ++
          }
        }
      }
    }
  }
}
console.log(sum)

