const fs = require('fs');

const error = require('../error');

// module.exports = (PATH) =>
//   PATH == '' ? process.stdin : fs.createReadStream(PATH, 'utf-8');

// The file read stream, if the address to the file ('PATH')
//is empty - produces input through the console
module.exports = function (PATH) {
  if (PATH == '') {
    process.stdout.write('Enter your text and hit Enter + ctrl+C: \n');
    return process.stdin;
  } else {
    const fileReader = fs.createReadStream(PATH, 'utf-8');
    fileReader.on('error', (err) => {
      error('File read error');
    });
    return fileReader;
  }
};
