module.exports = (sequelize, DataTypes) => {
    const blogPostModel = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type : DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type : DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type : DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      published: {
        type : DataTypes.DATE,
      },
      updated: {
        type : DataTypes.DATE,
      },
    }, {
      timestamps: false,
      underscored: true,
    });
  
    blogPostModel.associate = (models) => {
      blogPostModel.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
  
    return blogPostModel
};