/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/

function convertHTML(str) {
    const regExpArray = [
      [/&/g, '&​amp;'],
      [/</g, '&​lt;'],
      [/>/g, '&​gt;'],
      [/"/g, '&​quot;'],
      [/'/g, '&​apos;']
    ];
    // Array.prototype.reduce
    return regExpArray.reduce((processedString, [regexp, replacement]) => 
    processedString.replace(regexp, replacement), str)
  }
  
  convertHTML("Hamburgers < Pizza");
  module.exports = convertHTML;  