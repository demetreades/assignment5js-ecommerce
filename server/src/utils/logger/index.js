const pino = require('pino');

const logger = pino({
  prettyPrint: process.env.NODE_ENV || 'development',
  colorize: process.env.NODE_ENV || 'development',
  //   level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

module.exports = logger;
