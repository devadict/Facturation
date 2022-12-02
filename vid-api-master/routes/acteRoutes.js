const express = require('express');
const acteCtrl = require('../controllers/acteCtrl');
const router = express.Router();

router.post('/:PatientId', acteCtrl.createActe);
router.get('/:PatientId', acteCtrl.getAllActe);

module.exports = router;