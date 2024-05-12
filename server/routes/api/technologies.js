const express = require('express');
const router = express.Router();
const techCtrl = require('../../controllers/api/technologies');

router.get('/', techCtrl.index);
router.post('/', techCtrl.create);
router.get('/:id', techCtrl.detail);
router.delete('/:id', techCtrl.deleteTech);

module.exports = router;