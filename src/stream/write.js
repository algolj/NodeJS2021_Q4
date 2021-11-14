const fs = require('fs');
const erorr = require('../error');

// module.exports = (PATH) =>
//   PATH == '' ? process.stdout : fs.createWriteStream(PATH);

module.exports = function (PATH) {
  if (PATH == '') {
    // If there is no file for output, output the data to the console
    return process.stdout;
  } else {
    // Declaring an error with an existing file
    fs.access(PATH, fs.F_OK, (err) => {
      if (err) {
        erorr(`the file "${PATH}" does not exist`);
      }
    });
    return fs.createWriteStream(PATH);
  }
};
