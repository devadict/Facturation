module.exports = (sequelize, DataTypes) => {
    const Acte = sequelize.define("Acte", {
        PatientId: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        nature: {
        type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pourcentage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        practicien: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observations: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantite: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        prixUnitaire: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        sousTotal: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
    return Acte;
  };
  