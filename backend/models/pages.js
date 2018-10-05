"use strict";
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define(
    "pages",
    {
      title: DataTypes.STRING,
      pageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "compositeIndex",
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      status: DataTypes.STRING,
      content: DataTypes.STRING,
      parent: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  pages.associate = function(models) {
    // associations can be defined here
    // pages.hasMany(models.User);
  };
  return pages;
};
