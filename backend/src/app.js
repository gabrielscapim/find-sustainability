const express = require('express');
const { startupRoutes, goalRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use('/startup', startupRoutes);
app.use('/goal', goalRoutes);

module.exports = app;