/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
const express = require('express');
const { dbByEnv } = require('../config');

// eslint-disable-next-line no-unused-vars
const db = require(dbByEnv);
// TODO ver si esta es la forma correcta de hacerlo, sobre todo porque solamente haces un import y nada mas. Agregar error si lo mandan sin los parametros env
const app = express();
const playersRouter = require('./routes/player-router');
const loginRouter = require('./controllers/login');
const authenticationRouter = require('./middleware/authenticate-jwt');
const { unknownEndpoint, errorHandler } = require('./middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the dice Game!!!. Log-in on /login');
});
app.use('/', loginRouter);
app.use(authenticationRouter);

app.use('/players', playersRouter);
app.use(errorHandler, unknownEndpoint);
module.exports = app;

// TODO agregar los archivos de postman, contar que tiene el token guardado!
// TODO ver como coño esta implementado la forma que coje el esquema basado en ENV
