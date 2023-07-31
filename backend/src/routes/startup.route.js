const route = require('express').Router();
const { startupController } = require('../controllers');

route.get('/', startupController.getAllStartups);

module.exports = route;