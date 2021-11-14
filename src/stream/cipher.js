const { Transform } = require('stream');

const cipher = require('../cipher');

// Pack each chunk encryption in Transform wrapper
module.exports = function (config) {
  return config.config.map(
    (cnf) =>
      new Transform({
        transform(chunk) {
          this.push(cipher(chunk, cnf[0], +cnf[1]));
        },
      })
  );
};
