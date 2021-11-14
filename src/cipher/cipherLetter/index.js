const atbash = require('./atbash');
const caesar_rot = require('./caesar_rot8');

// letter - letter to be encrypted
// cipher_method - encryption type
//              'A' - Atbash
//              'C' - Caesar
//              'R' - ROT-8
// type - type of operation
//       1 - encoding
//       0 - decoding
module.exports = function (letter, cipher_method, type) {
  // get letter code
  const letterCode = letter.charCodeAt();
  // Check the letter in upper or lower case,
  // and then get the Char code of the letter "a"
  // in the case of the current letter
  const A_RegisterCode = letterCode <= 90 ? 65 : 97;

  // Get the code of the encrypted letter
  let encLetterCode =
    cipher_method == 'A'
      ? atbash(letterCode - A_RegisterCode)
      : caesar_rot(
          letterCode - A_RegisterCode,
          cipher_method == 'C' ? 1 : 8,
          type
        );

  // Convert char Code letter to letter and output it
  return String.fromCharCode(A_RegisterCode + encLetterCode);
};
