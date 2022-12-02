const db = require('../models');


exports.createActe = async (req, res, next) => {
    try {

        const pourcentage = parseInt(req.body.pourcentage);
        const quantite = parseInt(req.body.quantite);
        const prixUnitaire = parseInt(req.body.prixUnitaire);
        
        
        
        function calcPercnt(a, b, percentage) {
            const result = a * b - (a*b*(percentage / 100));
            return parseFloat(result.toFixed(2));
        };
        const sousTotal = await calcPercnt(quantite, prixUnitaire, pourcentage); 
        
        const acte = await db.Acte.create({
            PatientId: await req.params.PatientId,
            nature: req.body.nature,
            date: req.body.date,
            practicien: req.body.practicien,
            observations: req.body.observations,
            pourcentage: pourcentage,
            quantite: quantite,
            prixUnitaire: prixUnitaire,
            sousTotal: sousTotal
        }).then((acte) => res.status(201).json({ acte }));
        console.log(acte); 
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
};
exports.getAllActe = async (req, res, next) => {
    try {
        const PatientId = await req.params.PatientId;
        await db.Acte.findAll({where: {PatientId: PatientId}}).then((acte) => res.send(acte));
    } catch (err) {
        res.status(500).send({
            error: err
        });
    }
};
