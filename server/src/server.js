require('dotenv').config({ path: 'server/src/config/.env' });
const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const databaseConnection = require('./config/database/connection');
const { logger, handleError, handleNotFound, handleExit } = require('./utils');

const routes = require('./routes'); // routes/api/

databaseConnection();

// bodyParser ?? express.json
// cookieParser
// pino/morgan log.file
// fileupload
// cors
// helmet
// xss
// hpp : http param pollution
// limiter : rate limiting
// mongo data sanitize

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', (req, res) => {
    res.send({
      success: true,
      mode: 'development mode',
    });
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded

app.use(routes, handleNotFound);

app.use(handleExit);
app.use(handleError);

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Listening on PORT: ${PORT}`);
  if (process.send !== undefined) {
    logger.info('Process ready');
    process.send('ready');
  }

  process.on('exit', handleExit('exit'));
  process.on('SIGINT', handleExit('SIGINT'));
  process.on('SIGTERM', handleExit('SIGTERM'));
  process.on('uncaughtException', handleExit('uncaughtException'));
  process.on('uncaughtRejection', handleExit('uncaughtRejection'));
});
