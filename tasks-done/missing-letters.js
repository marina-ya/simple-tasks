/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var startCode = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++){
   if (str.charCodeAt(i) !== startCode){
       console.log(String.fromCharCode(startCode)); 
   return String.fromCharCode(startCode)
   }
   else startCode++
  }
  };
  fearNotLetter("abcdefghjklmno");


  module.exports = fearNotLetter;