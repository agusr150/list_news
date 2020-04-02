'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class New extends Model { }

  New.init({
    country: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, { sequelize });

  New.associate = function (models) {
    // associations can be defined here
    New.belongsTo(models.User, { foreignKey: 'UserId' })
  };
  return New;
};