const read = require('./read');
const write = require('./write');
const cipher = require('./cipher');

module.exports = {
  read: read,
  cipher: cipher,
  write: write,
};
