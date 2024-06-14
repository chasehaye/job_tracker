const Job = require('../models/job');

module.exports = async function ensureJobOwnership(req, res, next) {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
          return res.status(404).json({ error: 'Job not found' });
        }
        if (job.user.toString() !== req.user._id.toString()) {
          return res.status(403).json({ error: 'Access denied' });
        }
        next();
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
