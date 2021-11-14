const error = require('./error');

module.exports = function (arr) {
  const allFlag = ['-c', '-o', '-i', '--config', '--input', '--output'];

  const config = {
    config: '',
    input: '',
    output: '',
  };

  // Loop over every 2nd element (presumably a key) from process.argv
  for (let i = 0; i < arr.length; i += 2) {
    // Check if element is a key (flag)
    const addParam = (param, value) => {
      if (config[param] == '' && !allFlag.includes(value)) {
        config[param] = value;
      } else {
        error(
          `There are duplicate parameters "${param}" or the parameter "${value}" is incorrect`
        );
      }
    };

    // Write the value of the flag into the object config
    switch (arr[i]) {
      case '-c':
      case '--config':
        addParam('config', arr[i + 1]);
        break;
      case '-o':
      case '--output':
        addParam('output', arr[i + 1]);
        break;
      case '-i':
      case '--input':
        addParam('input', arr[i + 1]);
        break;
      default:
        error(`"${arr[i]}" not a parameter`);
        break;
    }
  }

  // If there is no encryption type, we display an error
  if (!config.config) error(`Config not set`);

  // Split the encryption string, check for the correctness
  // of the encryption configuration and put them in the queue
  // in the order they are written
  config.config = config.config.split('-').map((el) => {
    if (['A', 'C0', 'C1', 'R0', 'R1'].some((cipher) => el == cipher)) {
      return el;
    } else {
      error(`Invalid config value. The value cannot be: "${el}"`);
    }
  });

  // If there is not one encryption operation, we give an error
  if (config.config.length <= 0)
    error('There are no text encoding methods in the config');

  // Input the configuration object as the result of the function
  return config;
};
