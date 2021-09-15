'use strict';

require('dotenv').config({ path: 'server/src/config/.env' });
const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const cors = require('cors');
const databaseConnection = require('./config/database/connection');
const {
  logger,
  handleError,
  handleNotFound,
  handleExit,
  handleMongoErrors,
} = require('./utils');

const routes = require('./routes'); // routes/api/

databaseConnection();

// fileupload ?? multer
// pino/morgan log.file
// compression
// xss
// hpp : http param pollution
// limiter : rate limiting
// mongo data sanitize

// const baseUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://mymainurl.com'
//     : 'http://localhost:3000';

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200,
};

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());

app.use(routes, handleNotFound);

app.use(handleExit);
app.use(handleMongoErrors);
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

/// eooooo
