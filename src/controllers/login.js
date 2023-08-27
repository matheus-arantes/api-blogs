const { loginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { status, data } = await loginService.login(email, password);
    res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
};