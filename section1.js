                  // The part one of java


                  // A simple program that calculates the factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Try it out
let num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);