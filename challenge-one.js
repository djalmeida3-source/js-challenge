// [5, 7, 1, 1, 2, 3, 22] -> 20
// [1, 1, 1, 1, 1] -> 6
// [1, 5, 1, 1, 1, 10, 15, 20, 100] -> 55
let coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]

function minimunSumThatCannotCreate() {
  // 1. Sort the coins
  // 2. Start sum element and comparing the next one to know if its less than the next
  // 3. By the end of the cicle we have the minimum sum
  console.log(minimumSum(coins));
}

function minimumSum(coins) {
  let actualMinimumImpossibleChange = 1;
    
  const sortedCoins = coins.sort((a,b) => a-b);
    
  for ( let i = 0 ; i < sortedCoins.length ; i++ ) {
    if (actualMinimumImpossibleChange < sortedCoins[i] ) {
      return actualMinimumImpossibleChange
    }
    actualMinimumImpossibleChange += sortedCoins[i];
  }
  return actualMinimumImpossibleChange;
}

minimunSumThatCannotCreate();

