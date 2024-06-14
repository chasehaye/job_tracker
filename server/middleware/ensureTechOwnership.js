const Technology = require('../models/technology');

module.exports = async function ensureTechOwnerShip(req, res, next) {
    console.log('ensure tech own ran')
    try {
        console.log(1)
        const tech = await Technology.findById(req.params.id);
        console.log(2)
        if (!tech) {
          return res.status(404).json({ error: 'Job not found' });
        }
        console.log(3)
        if (tech.user.toString() !== req.user._id.toString()) {
          return res.status(403).json({ error: 'Access denied' });
        }
        console.log(4)
        next();
        console.log(5)
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }