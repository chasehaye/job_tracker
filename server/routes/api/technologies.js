const express = require('express');
const router = express.Router();
const techCtrl = require('../../controllers/api/technologies');


router.get('/findSelectedTech', techCtrl.findTechnologiesByIds);
router.get('/', techCtrl.index);
router.post('/', techCtrl.create);
router.get('/:id', techCtrl.detail);
router.delete('/:id', techCtrl.deleteTech);
router.put('/:id', techCtrl.update);


module.exports = router;