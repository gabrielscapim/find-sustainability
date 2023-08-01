const route = require('express').Router();
const { startupController } = require('../controllers');

route.post('/login', startupController.loginAuthentication);

module.exports = route;