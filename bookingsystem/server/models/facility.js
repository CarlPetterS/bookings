
module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Facility.associate = (models) => {
    // associations can be defined here
    Facility.belongsTo(models.Room, {
      foreignKey: 'roomId',
      onDelete: 'CASCADE',
    })
  };
  return Facility;
};