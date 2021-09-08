const pino = require('pino');

// expressLogger({ logger });
// app.use(expressLogger);

const logger = pino({
  prettyPrint: process.env.NODE_ENV || 'development',
  colorize: process.env.NODE_ENV || 'development',
});

module.exports = logger;
