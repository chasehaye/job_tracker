const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');

router.get('/', jobsCtrl.index);
router.post('/', jobsCtrl.create);
router.get('/:id', jobsCtrl.detail);
router.delete('/:id', jobsCtrl.deleteJob);
router.put('/:id', jobsCtrl.update);
router.get('/category/:category/:value/:order', jobsCtrl.filteredList);

module.exports = router;