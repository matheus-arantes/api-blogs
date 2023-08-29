const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const login = async (email, password) => {
    try {
        const user = await User.findOne({ where: { email } });
        
        if (!user || password !== user.password) {
            return { status: 400, data: { message: 'Invalid fields' } };
        }
       
        const token = jwt.sign({ data: { userId: user.id } }, process.env.JWT_SECRET, jwtConfig);
        return { status: 200, data: { token } };
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    login,
};