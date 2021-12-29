// [1, 2, 3, 5, 6, 8, 9] -> [1, 4, 9, 25, 36, 64, 81]
// [-2, -1] -> [1, 4]
// [-10, -5, 0, 5, 10] -> [0, 25, 25, 100, 100]

let array = [1, 2, 3, 5, 6, 8, 9]

function squaresFromSortedArray() {
  const squareMap = array.map(value => Math.abs(value) * Math.abs(value)).sort((a,b) => a-b);
  console.log('squareMap: ' + squareMap);
}

squaresFromSortedArray();