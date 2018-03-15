/* Sum All Primes
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime. 


sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

*/

function sumPrimes(num) {
  let numArray = [],
    primeArray = [];
  for (let i = 0; i < num; i++) {
    let divisArray = [];
    numArray.push(i);
    [].forEach.call(numArray, function(num) {
      if (i % num === 0) {
        divisArray.push(num);
      }
    });
    if (i >= 2 && divisArray.length <= 2) {
      primeArray.push(i);
    }
  }
  for (var i = 2; i < num.length; i++) {
    if (i % i == 0) {
      primeArray.push(i);
    }
  }
  let sum = primeArray.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(sum);
  return sum;
}
sumPrimes(954);

module.exports = sumPrimes;
