
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost_per_hr: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  Room.associate = (models) => {
    // associations can be defined here
    Room.hasMany(models.Booking, {
      foreignKey: 'roomId',
      as: 'bookings',
    })
    Room.hasMany(models.Facility, {
      foreignKey: 'roomId',
      as: 'facilities',
    })
  };
  return Room;
};