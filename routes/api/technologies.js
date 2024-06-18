const express = require('express');
const router = express.Router();
const techCtrl = require('../../controllers/api/technologies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const ensureOwnership = require('../../middleware/ensureTechOwnership')


router.get('/findSelectedTech', ensureLoggedIn, techCtrl.findTechnologiesByIds);
router.get('/', ensureLoggedIn, techCtrl.index);
router.post('/', ensureLoggedIn, techCtrl.create);
router.get('/:id', ensureLoggedIn, techCtrl.detail);
router.delete('/:id', ensureLoggedIn, ensureOwnership, techCtrl.deleteTech);
router.put('/:id', ensureLoggedIn, ensureOwnership, techCtrl.update);


module.exports = router;