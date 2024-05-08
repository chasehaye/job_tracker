const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.get('/', jobsCtrl.index);
router.post('/', jobsCtrl.create);
router.get('/:id', jobsCtrl.detail);
router.delete('/:id', jobsCtrl.deleteJob);

module.exports = router;