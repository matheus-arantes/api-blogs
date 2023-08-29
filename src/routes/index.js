const express = require('express');
const loginRoute = require('./loginRoute');
const userRoute = require('./userRoute');
const categoriesRouter = require('./categoriesRoute');

const router = express.Router();

router.use('/login', loginRoute);

router.use('/user', userRoute);

router.use('/categories', categoriesRouter);

module.exports = router;