const db = require('../models');


exports.getFacture = async (req, res, next) => {
    try {

        const patientId = await req.params.PatientId;
        let facture = await db.Acte.findAll({
            where: { PatientId: patientId }
        });
        const total = facture.reduce((total, obj) => obj.dataValues.sousTotal + total, 0);
        res.status(201).json({total});
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
};
