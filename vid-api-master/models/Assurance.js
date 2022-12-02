module.exports = (sequelize, DataTypes) => {
    const Assurance = sequelize.define("Assurance", {
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      priseEnCharge: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
    });
    return Assurance;
  };