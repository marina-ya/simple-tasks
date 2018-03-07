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