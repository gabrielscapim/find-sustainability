const route = require('express').Router();
const { startupController } = require('../controllers');

route.get('/search/goal', startupController.getStartupsByGoal);
route.get('/search/name', startupController.getStartupsByName);
route.get('/', startupController.getAllStartups);
route.post('/', startupController.addStartup);

module.exports = route;