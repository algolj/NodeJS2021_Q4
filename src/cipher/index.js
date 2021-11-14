const cipherLetter = require('./cipherLetter');

// Split the "text" into symbols. If this is
// a letter of the Latin alphabet, we encrypt
// it. After that, we again combine the characters
// into text.
// cipher_method - encryption type
//              'A' - Atbash
//              'C' - Caesar
//              'R' - ROT-8
// type - type of operation
//       1 - encoding
//       0 - decoding
module.exports = (text, cipher_method, type = 1) =>
  String(text)
    .split('')
    .reduce(
      (acc, letter) =>
        acc +
        (/[a-zA-Z]/.test(letter)
          ? cipherLetter(letter, cipher_method, type)
          : letter),
      ''
    );
