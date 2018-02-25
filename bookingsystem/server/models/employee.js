
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Person, {
      foreignKey: 'personId',
      onDelete: 'CASCADE'
    })
  };

  return Employee;
};
