const { createUserSchema } = require('./schemas');

const checkUser = async (req, res, next) => {
    try {
      const validated = await createUserSchema.validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  };
  
module.exports = {
   checkUser,
};