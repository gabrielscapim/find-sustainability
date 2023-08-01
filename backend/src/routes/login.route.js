const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLoginFields } = require('../middlewares/validateLoginFields');

route.post('/', validateLoginFields, loginController.loginAuthentication);

module.exports = route;