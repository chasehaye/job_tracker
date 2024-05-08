const Job = require('../../models/job');

module.exports = {
  index,
  create,
  detail,
  deleteJob,
};

async function index(req, res){
  try{
    const jobs = await Job.find();
    res.status(200).json(jobs);
  }catch(err){
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try{
    req.body.uploaded_by = req.user._id;
    const newJob = await Job.create(req.body);
    res.status(200).json(newJob);
  }catch(err){
    res.status(400).json(err);
  }
}

async function detail(req, res) {
  try{
    const job = await Job.findById(req.params.id)
    res.status(200).json(job)
  }catch(err){
    res.status(400).json(err);
  }
}

async function deleteJob(req, res) {
  try{
    await Job.findByIdAndDelete(req.params.id)
    res.status(200).json({
      data: 'success'
    })
  }catch(err){
    res.status(400).json(err);
  }
}