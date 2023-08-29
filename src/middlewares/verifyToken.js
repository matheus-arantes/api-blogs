const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!authHeader) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET)
      next();
    } catch (error) {
      res.status(401).json({ message: 'Expired or invalid token' });
    }

  };
  
module.exports = {
   verifyToken,
};