const route = require('express').Router();
const { startupController } = require('../controllers');
const validateStartupFields = require('../middlewares/validateStartupFields');

route.get('/search/goal', startupController.getStartupsByGoal);
route.get('/search/name', startupController.getStartupsByName);
route.get('/', startupController.getAllStartups);
route.post('/', validateStartupFields, startupController.addStartup);

module.exports = route;