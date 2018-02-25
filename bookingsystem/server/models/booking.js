module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define('Booking', {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
  Booking.associate = (models) => {
    // associations can be defined here
    Booking.belongsTo(models.Room, {
      foreignKey: 'roomId',
      onDelete: 'CASCADE',
    });
    Booking.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE',
    })
    Booking.hasMany(models.Participant, {
      foreignKey: 'bookingId',
      as: 'participants',
    })
  };
  return Booking;
};