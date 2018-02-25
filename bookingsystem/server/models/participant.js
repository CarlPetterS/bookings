
module.exports = (sequelize, DataTypes) => {
  var Participant = sequelize.define('Participant', {});
  Participant.associate = (models) => {
    // associations can be defined here
    Participant.belongsTo(models.Booking, {
      foreignKey: 'bookingId',
      onDelete: 'CASCADE',
    });
    Participant.belongsTo(models.Person, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
    });
  };
  return Participant;
};