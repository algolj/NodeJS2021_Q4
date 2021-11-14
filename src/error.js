// Display an error and end the process with 1 status
module.exports = (text) => {
  console.error(text);
  process.exit(1);
};
