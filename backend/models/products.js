"use strict";
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      productName: {
        type: DataTypes.STRING
      },
      productPrice: {
        type: DataTypes.INTEGER
      },
      productThumbnail: {
        type: DataTypes.STRING
      },
      productImage: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  products.associate = function(models) {
    // associations can be defined here
    //products.hasMany(models.productDetails);
  };
  return products;
};
