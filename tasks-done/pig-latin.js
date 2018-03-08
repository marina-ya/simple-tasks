/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.


translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".

*/



function translatePigLatin(str) {
    var strArr = str.split("");
    var firstVowel = /[aeiou]/.test(str[0]);
    var secondVowel = /[aeiou]/.test(str[1]);
    
    if (firstVowel == false) {
        var firstLetter = strArr.shift();

        if (secondVowel == true) {
            str = strArr.push(firstLetter + "ay");
        } else {
            var secondLetter = strArr.shift();
            str = strArr.push(firstLetter + secondLetter + "ay");
        }
        strArr = strArr.join('');
        return strArr;
        
    } else {
        str = str + "way";
        return str;
    }
}

translatePigLatin("clali");


module.exports = translatePigLatin;
  