function diffArray(arr1, arr2) {
    var newArr = [];
    function compareArray(firstArr, lastArr) {
        for (var i = 0; i < lastArr.length; i++) {
            if (firstArr.indexOf(lastArr[i]) === -1) {
                newArr.push(lastArr[i]);
            }
        }
    }
    compareArray(arr1, arr2);
    compareArray(arr2, arr1);
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);