const express = require('express');
const { postController } = require('../controllers');
const { verifyToken } = require('../middlewares/verifyToken');
const { checkPost } = require('../middlewares/postMiddle');

const postRouter = express.Router();

postRouter.post('/', verifyToken, checkPost, postController.createPost);

module.exports = postRouter;