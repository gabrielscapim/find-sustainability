const route = require('express').Router();
const { startupController } = require('../controllers');
const validateStartupEmail = require('../middlewares/validateStartupEmail');
const validateStartupFields = require('../middlewares/validateStartupFields');
const { validateToken } = require('../middlewares/validateToken');

route.get('/:id', startupController.getStartupById);
route.delete('/:id', validateToken, startupController.deleteStartup);
route.put('/:id', validateToken, startupController.editStartup);
route.get('/search/goal', startupController.getStartupsByGoal);
route.get('/search/name', startupController.getStartupsByName);
route.get('/', startupController.getAllStartups);
route.post('/', validateStartupFields, validateStartupEmail, startupController.addStartup);

module.exports = route;