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
        return { status: 409, data: { message: 'User already registered' } };
    }
    
    const createdUser = await User.create(user);
    const token = jwt.sign({ data: { userId: createdUser.id } }, process.env.JWT_SECRET, jwtConfig);
    return { status: 201, data: { token } };
};

const findAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { status: 200, data: users };
};

const findById = async (id) => {
    const user = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });

    if (!user) {
        return { status: 404, data: { message: 'User does not exist' } };
    }

    return { status: 200, data: user };
};

module.exports = {
    createUser,
    findAll,
    findById,
};