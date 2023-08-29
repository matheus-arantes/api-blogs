const express = require('express');
const { categoriesController } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', verifyToken, categoriesController.createCategory);

module.exports = categoriesRouter;