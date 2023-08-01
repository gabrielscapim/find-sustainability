const route = require('express').Router();
const { loginController } = require('../controllers');

route.post('/login', loginController.loginAuthentication);

module.exports = route;