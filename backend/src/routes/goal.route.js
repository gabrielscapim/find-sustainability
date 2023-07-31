const route = require('express').Router();
const { goalController } = require('../controllers');

route.get('/', goalController.getAllGoals);

module.exports = route;