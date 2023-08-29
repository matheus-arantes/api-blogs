const { userService } = require('../services');

const createUser = async (req, res) => {
  try {
    const { status, data } = await userService.createUser(req.body);
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

const findAll = async (_req, res) => {
  try {
    const { status, data } = await userService.findAll();
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  findAll,
};