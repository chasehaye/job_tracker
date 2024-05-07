const Job = require('../../models/job');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    req.body.uploaded_by = req.user._id;
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  }catch(err) {
    res.status(400).json(err);
  }
}