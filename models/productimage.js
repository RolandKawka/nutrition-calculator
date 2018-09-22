module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define('ProductImage', {
      path: DataTypes.STRING,
  }, {});
  ProductImage.associate = function(models) {
      ProductImage.belongsTo(models.Product);
  };
  return ProductImage;
};
