const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { status, data } = await categoriesService.createCategory(req.body);
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    createCategory,
};