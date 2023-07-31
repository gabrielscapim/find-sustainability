const express = require('express');
const { startupRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use('/startups', startupRoutes);

module.exports = app;