// Caesar or ROT-8 letter encryption and decryption function
// step - letter shift step
// type - type of operation
// type = 1 - encoding
// type = 0 - decoding
module.exports = function caesar_rot(letterCode, step = 1, type = 1) {
  let encLetterCode = letterCode + (type ? step : -step);

  if (encLetterCode < 0) encLetterCode += 26;
  if (encLetterCode > 25) encLetterCode -= 26;

  return encLetterCode;
};
