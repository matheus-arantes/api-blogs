const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const id = jwt.verify(token, process.env.JWT_SECRET);
      req.user = id;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Expired or invalid token' });
    }
};
  
module.exports = {
   verifyToken,
};