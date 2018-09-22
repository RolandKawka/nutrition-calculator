module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        proteins: DataTypes.INTEGER,
        carbs: DataTypes.INTEGER,
        fat: DataTypes.INTEGER,
        calories: DataTypes.INTEGER,
    }, {});
    Product.associate = (models) => {
        Product.hasMany(models.ProductImage, { onDelete: 'cascade' });
    };
    return Product;
};
