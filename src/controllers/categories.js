const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { status, data } = await categoriesService.createCategory(req.body);
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

const findAll = async (_req, res) => {
  try {
    const { status, data } = await categoriesService.findAll();
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
    createCategory,
    findAll,
};