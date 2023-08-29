const { Category } = require('../models');

const createCategory = async (category) => {
    const { name } = category;
    if (!name) {
        return { status: 400, data: { message: '"name" is required' } };
    }
    const newCategory = await Category.create(category);
    return { status: 201, data: newCategory };
};

module.exports = {
    createCategory,
}