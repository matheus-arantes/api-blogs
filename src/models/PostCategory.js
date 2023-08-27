module.exports = (sequelize, DataTypes) => {
    const postCatModel = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true
      }
    }, {
        timestamps: false,
        underscored: true,
    });
  
    postCatModel.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: postCatModel,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories'
      });
  
      models.Category.belongsToMany(models.BlogPost, {
        through: postCatModel,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'posts'
      });
  
    };
  
    return postCatModel;
  };