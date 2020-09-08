const v1Router = require('express').Router();
const botRouter = require('./botRoute');

v1Router.use('/api/v1', botRouter);

module.exports = v1Router;
