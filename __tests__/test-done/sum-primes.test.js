const sumPrimes = require("../../tasks-done/sum-primes");

describe("test for sumPrimes", () => {
  test("return correct result for 10", () => {
    expect(sumPrimes(10)).toEqual(17);
  });
  test("return correct result for 900", () => {
    expect(sumPrimes(900)).toEqual(62797);
  });
});
