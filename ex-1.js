function fizzBuzz(n) {
  result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i - 1] = "FizzBuzz";
    } else if (i % 5 === 0) {
      result[i - 1] = "Buzz";
    } else if (i % 3 === 0) {
      result[i - 1] = "Fizz";
    } else {
      result[i - 1] = String(i);
    }
  }
  return result;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
