"use strict";
module.exports = (sequelize, DataTypes) => {
  const productDetails = sequelize.define(
    "productDetails",
    {
      productDetailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      productType: {
        type: DataTypes.STRING
      },
      productDescription: {
        type: DataTypes.STRING
      },
      productColor: {
        type: DataTypes.STRING
      },
      productSizes: {
        type: DataTypes.STRING
      },
      productGallery: {
        type: DataTypes.STRING
      },
      productDownloads: {
        type: DataTypes.STRING
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "productId"
        }
      },
      productAvailability: {
        type: DataTypes.BOOLEAN
      },
      productSKU: {
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
  productDetails.associate = function({ products }) {
    // associations can be defined here
    productDetails.belongsTo(products);
  };
  return productDetails;
};
