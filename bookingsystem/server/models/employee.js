
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Person, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
    })

    Employee.belongsTo(models.Team, {
      foreignKey: 'teamId',
      onDelete: 'CASCADE',
    })

    Employee.hasOne(models.Booking, {
      foreignKey: 'employeeId',
      as: 'booking',
    })
  };

  return Employee;
};
