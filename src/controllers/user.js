const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const { status, data } = await userService.createUser(req.body);
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
};