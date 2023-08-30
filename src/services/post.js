const { BlogPost, PostCategory, Category, sequelize } = require('../models');

const createPost = async (payload, post) => {
    const { title, content, categoryIds } = post;
    const { userId } = payload.data;
    
    const promises = categoryIds.map(async (id) => Category.findByPk(id));
    const categories = await Promise.all(promises);
    
    if (categories.includes(null)) {
        return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
    }

    const transaction = await sequelize.transaction();
    const newPost = await BlogPost.create({ title, content, userId }, { transaction });
    const associations = categoryIds.map((categoryId) => ({ postId: newPost.id, categoryId }));

    await PostCategory.bulkCreate(associations, { transaction });
    await transaction.commit();
    return { status: 201, data: newPost };
};

module.exports = {
    createPost,
};
