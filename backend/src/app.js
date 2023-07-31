const express = require('express');
const { startupRoutes, goalRoutes } = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/startup', startupRoutes);
app.use('/goal', goalRoutes);
app.use(errorHandler);

module.exports = app;