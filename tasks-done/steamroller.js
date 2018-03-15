/*Steamroller
Flatten a nested array. You must account for varying levels of nesting. 



const _ = require("lodash");
function steamrollArray(arr) {
  return _.flattenDeep(arr);
}

steamrollArray([[["a"]], [["b"]]]);


*/

function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  var array = [];
  for (var i = 0; i < arr.length; i++) {
    array = array.concat(steamrollArray(arr[i]));
  }
  console.log(array);
  return array;
}

steamrollArray([[["a"]], [["b"]]]);
module.exports = steamrollArray;
