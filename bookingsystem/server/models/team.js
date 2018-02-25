module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  Team.associate = (models) => {
    // associations can be defined here
    Team.hasMany(models.Employee, {
      foreignKey: 'teamId',
      as: 'teams',
    });
    Team.hasMany(models.CostLog, {
      foreignKey: 'teamId',
      as: 'costlogs',
    })
  }
  return Team;
};