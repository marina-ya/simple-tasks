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
    var str = str.split("");

    var firstConsonant = /[aeiou]/.test(str[0]);
    if(firstConsonant==false){
        var newWord=str.push("ay").join('');
    }

    console.log(str);
   
    console.log(newWord);
    return str;
  }
  
  translatePigLatin("consonant");
  