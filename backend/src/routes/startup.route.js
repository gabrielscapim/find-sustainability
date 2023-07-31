const route = require('express').Router();
const { startupController } = require('../controllers');

route.get('/search/name', startupController.getStartupsByName);
route.get('/', startupController.getAllStartups);

module.exports = route;