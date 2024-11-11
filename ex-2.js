function countPositivesSumNegatives(input) {
  if (input === null || input[0] === undefined) {
    return [];
  } else {
    let countPositives = 0;
    let sumNegative = 0;
    for (let num of input) {
      if (num <= 0) {
        sumNegative += num;
      } else {
        countPositives += 1;
      }
    }
    return [countPositives, sumNegative];
  }
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
