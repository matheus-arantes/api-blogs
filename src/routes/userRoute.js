const express = require('express');
const { userController } = require('../controllers');
const { checkUser } = require('../middlewares/userMiddle');

const userRouter = express.Router();

userRouter.post('/', checkUser, userController.createUser);

module.exports = userRouter;