const express = require('express');
const { loginController } = require('../controllers');
const { checkFields } = require('../middlewares/loginMiddle');

const loginRouter = express.Router();

loginRouter.post('/', checkFields, loginController.login);

module.exports = loginRouter;