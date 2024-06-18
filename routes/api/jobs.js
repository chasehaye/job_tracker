const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const ensureOwnership = require('../../middleware/ensureJobOwnership');

router.get('/', ensureLoggedIn, jobsCtrl.index);
router.post('/', ensureLoggedIn, jobsCtrl.create);
router.get('/:id', ensureLoggedIn, jobsCtrl.detail);
router.delete('/:id', ensureLoggedIn, ensureOwnership, jobsCtrl.deleteJob);
router.put('/:id', ensureLoggedIn, ensureOwnership, jobsCtrl.update);
router.get('/category/:category/:value/:order', ensureLoggedIn, jobsCtrl.filteredList);

module.exports = router;