
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
  };

  return Employee;
};
