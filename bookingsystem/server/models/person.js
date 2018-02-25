module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Person.associate = (models) => {
    Person.hasOne(models.BusinessPartner, {
      foreignKey: 'personId',
      as: 'businessPartner',
    });

    Person.hasOne(models.Employee, {
      foreignKey: 'personId',
      as: 'employee',
    });

    Person.hasMany(models.Participant, {
      foreignKey: 'personId',
      as: 'participants',
    });
  };

  return Person;
};
