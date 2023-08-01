const route = require('express').Router();
const { startupController } = require('../controllers');
const validateStartupFields = require('../middlewares/validateStartupFields');
const { validateToken } = require('../middlewares/validateToken');

route.delete('/:id', validateToken, startupController.deleteStartup);
route.put('/:id', validateToken, startupController.editStartup);
route.get('/search/goal', startupController.getStartupsByGoal);
route.get('/search/name', startupController.getStartupsByName);
route.get('/', startupController.getAllStartups);
route.post('/', validateStartupFields, startupController.addStartup);

module.exports = route;