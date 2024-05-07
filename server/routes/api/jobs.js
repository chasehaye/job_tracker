const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.post('/', jobsCtrl.create);

module.exports = router;