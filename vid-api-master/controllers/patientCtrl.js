const db = require('../models');

exports.createPatient = async (req, res, next) => {
    const patient = await db.Patient.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        naissance: req.body.naissance,
        organisme: req.body.organisme,
        age: req.body.age,
        sexe: req.body.sexe,
        nationalite: req.body.nationalite,
        dateEntree: req.body.dateEntree,
    }).then((patient) => res.status(201).json({ patient }));
    console.log(patient);
};

exports.getAllPatients = async (req, res, next) => {
     await db.Patient.findAll().then((patients) => res.send(patients));
};