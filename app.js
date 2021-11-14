const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');

const stream = require('./src/stream');
const setConfig = require('./src/setConfig');
const error = require('./src/error');

// Create an object with data on the types
// of text encryption, input and output files
const config = setConfig(process.argv.slice(2));

// Create an asynchronous pipeline
const asyncPipline = promisify(pipeline);
try {
  // Call the pipeline with the necessary processing order
  asyncPipline(
    stream.read(config.input),
    ...stream.cipher(config),
    stream.write(config.output)
  );
} catch (err) {
  error('An error occurred while executing the pipelineAsync');
}
