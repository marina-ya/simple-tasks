/* Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. 
*/

function sumFibs(num) {
  let arrayFib = [1, 1];
  while (arrayFib[arrayFib.length - 1] + arrayFib[arrayFib.length - 2] <= num) {
    arrayFib.push(arrayFib[arrayFib.length - 1] + arrayFib[arrayFib.length - 2]);
  }

  return arrayFib
    .filter(num => num % 2 !== 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

sumFibs(10);
module.exports = sumFibs;
