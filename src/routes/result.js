const router = require('express').Router();
const resultCtrl = require('../controllers/results');

router.get('/requests', resultCtrl.fetchPatientRequests);
router.get('/symptoms', resultCtrl.fetchSymptoms);
module.exports = router;
