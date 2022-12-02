const express = require('express');
const patientCtrl = require('../controllers/patientCtrl');
const router = express.Router();

router.post('/', patientCtrl.createPatient);
router.get('/', patientCtrl.getAllPatients);

module.exports = router;