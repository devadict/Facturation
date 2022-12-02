module.exports = (sequelize, DataTypes) => {
    const Facture = sequelize.define("Facture", {
        modePaiement: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        etat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        total: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    });
    return Facture;
  };
  