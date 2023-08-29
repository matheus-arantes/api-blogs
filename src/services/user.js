const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const createUser = async (user) => {
    const { email } = user;
    const checkUser = await User.findOne({ where: { email } });
    
    if (checkUser) {
        return { status: 409 , data: { message: 'User already registered' }}
    }
    
    const createdUser = await User.create(user);
    const token = jwt.sign({ data: { userId: createdUser.id } }, process.env.JWT_SECRET, jwtConfig);
    return { status: 201, data: { token }}
};

module.exports = {
    createUser,
};