module.exports = (sequelize, DataTypes) => {
    const Medecin = sequelize.define("Medecin", {
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationalite: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateEntree: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Medecin;
  };