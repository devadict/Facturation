module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define("Patient", {
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
      sexe: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationalite: {
        type: DataTypes.STRING,
        allowNull: false
      },
      organisme: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateEntree: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    tableName: "Patient"
  });
    return Patient;
  };
  