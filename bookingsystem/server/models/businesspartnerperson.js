module.exports = (sequelize, DataTypes) => {
  const BusinessPartnerPerson = sequelize.define('BusinessPartnerPerson', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING
      allowNull: false,
    },
  });

  BusinessPartnerPerson.associate = (models) => {
    BusinessPartnerPerson.belongsTo(models.Person, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
    })
  };

  return BusinessPartnerPerson;
};
