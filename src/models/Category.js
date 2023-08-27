module.exports = (sequelize, DataTypes) => {
    const categoryModel = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
      underscored: true,
    });
  
    return categoryModel;
};