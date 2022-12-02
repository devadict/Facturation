const express = require('express');
const factureCtrl = require('../controllers/factureCtrl');
const router = express.Router();

router.get('/:PatientId', factureCtrl.getFacture);

module.exports = router;