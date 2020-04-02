'use strict';
module.exports = (sequelize, DataTypes) => {
  const New = sequelize.define('New', {
    country: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  New.associate = function(models) {
    // associations can be defined here
    New.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return New;
};