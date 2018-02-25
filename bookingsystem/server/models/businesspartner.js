module.exports = (sequelize, DataTypes) => {
  const BusinessPartner = sequelize.define('BusinessPartner', {
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  BusinessPartner.associate = (models) => {
    BusinessPartner.belongsTo(models.Person, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
    })
  };

  return BusinessPartner;
};
