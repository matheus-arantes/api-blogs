const express = require('express');
const { userController } = require('../controllers');
const { checkUser } = require('../middlewares/userMiddle');
const { verifyToken } = require('../middlewares/verifyToken');

const userRouter = express.Router();

userRouter.post('/', checkUser, userController.createUser);

userRouter.get('/', verifyToken, userController.findAll);

module.exports = userRouter;