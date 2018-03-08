/*We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

*/


function sumAll(arr) {
    var sum = 0;
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    for (var i = min; i <= max; i++) {
        sum = sum + i;
    }
    console.log(sum);
    return sum;
}

sumAll([4, 1]);


module.exports = sumAll;