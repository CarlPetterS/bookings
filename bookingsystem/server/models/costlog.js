'use strict';
module.exports = (sequelize, DataTypes) => {
  var CostLog = sequelize.define('CostLog', {
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
  CostLog.associate = (models) => {
    // associations can be defined here
    CostLog.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'set null'
    })
  };
  return CostLog;
};