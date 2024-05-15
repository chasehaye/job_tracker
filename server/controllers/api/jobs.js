const Job = require('../../models/job');

module.exports = {
  index,
  create,
  detail,
  deleteJob,
  update,
  filteredList
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
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  }catch(err){
    res.status(400).json(err);
  }
}

async function deleteJob(req, res) {
  try{
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data: 'success'
    });
  }catch(err){
    res.status(400).json(err);
  }
}

async function update(req, res){
  try{
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedJob);
  }catch(err){
    res.status(400).json('Bad Request');
  }
}

async function filteredList(req, res) {
  try {
      const { category, value } = req.params;
      const filter = {};
      if (category && value) {
        filter[category] = value;
      }
      const jobs = await Job.find(filter).sort({updatedAt: -1}).limit(5);
      res.status(200).json(jobs);
  } catch (err) {
      res.status(400).json(err);
  }
}