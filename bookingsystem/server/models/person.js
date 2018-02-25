module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {});
  Person.associate = (models) => {
    Person.hasOne(models.BusinessPartnerPerson, {
      foreignKey: 'personId',
      as: 'businessPartnerPerson',
    });

    Person.hasOne(models.Employee, {
      foreignKey: 'personId',
      as: 'employee',
    });
  };

  return Person;
};
