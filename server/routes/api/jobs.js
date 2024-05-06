const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/job');

router.get('/', jobsCtrl.index);
router.get('/:id', jobsCtrl.show);

module.exports = router;