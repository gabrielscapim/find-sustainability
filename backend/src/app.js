const express = require('express');
const cors = require('cors');
const { startupRoutes, goalRoutes, loginRoutes } = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
    origin: ['https://find-sustainability.vercel.app',
    'https://find-sustainability.vercel.app/login',
    'https://find-sustainability.vercel.app/find-startup',
    'https://find-sustainability.vercel.app/add-startup'],
}));
app.use(express.json());
app.use('/startup', startupRoutes);
app.use('/goal', goalRoutes);
app.use('/login', loginRoutes);
app.use(errorHandler);

module.exports = app;