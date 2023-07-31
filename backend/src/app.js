const express = require('express');
const { startupRoutes, goalRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use('/startups', startupRoutes);
app.use('/goals', goalRoutes);

module.exports = app;