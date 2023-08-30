const express = require('express');
const loginRoute = require('./loginRoute');
const userRoute = require('./userRoute');
const categoriesRouter = require('./categoriesRoute');
const postRouter = require('./postRoute');

const router = express.Router();

router.use('/login', loginRoute);

router.use('/user', userRoute);

router.use('/categories', categoriesRouter);

router.use('/post', postRouter);

module.exports = router;