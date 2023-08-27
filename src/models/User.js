module.exports = (sequelize, DataTypes) => {
    const userModel = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        underscored: true,
    });

    userModel.associate = (models) => {
        userModel.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'posts'
        });
    };

    return userModel;
};