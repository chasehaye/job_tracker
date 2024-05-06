const Job = require('../../models/job');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const jobs = await Job.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  jobs.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(jobs);
}

async function show(req, res) {
  const job = await Job.findById(req.params.id);
  res.json(job);
}