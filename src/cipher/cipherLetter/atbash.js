// Encryption type atbash
// letterCode - alphabet letter number
// alphabetLength - alphabet length, default is English
module.exports = (letterCode, alphabetLength = 26) => {
  let encLetterCode = alphabetLength - 1 - letterCode;

  if (encLetterCode < 0) encLetterCode += 26;
  if (encLetterCode > 25) encLetterCode -= 26;

  return encLetterCode;
};
