"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("productDetails", {
      productDetailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productType: {
        type: Sequelize.STRING
      },
      productDescription: {
        type: Sequelize.STRING
      },
      productColor: {
        type: Sequelize.STRING
      },
      productSizes: {
        type: Sequelize.STRING
      },
      productGallery: {
        type: Sequelize.STRING
      },
      productDownloads: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "productId"
        }
      },
      productAvailability: {
        type: Sequelize.BOOLEAN
      },
      productSKU: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("productDetails");
  }
};
