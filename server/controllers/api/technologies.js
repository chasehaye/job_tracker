const Technology = require('../../models/technology');

module.exports = {
    index,
    create,
    detail,
    deleteTech,
    update,
    findTechnologiesByIds,
}

async function index(req, res){
    try{
        const technologies = await Technology.find();
        res.status(200).json(technologies);
    }catch(err){
        res.status(400).json(err);
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newTechnology = await Technology.create(req.body);
        res.status(200).json(newTechnology);
    }catch(err){
        res.status(400).json(err);
    }
}

async function detail(req, res){
    try{
        const tech = await Technology.findById(req.params.id);
        res.status(200).json(tech);
    }catch(err){
        res.status(400).json(err);
    }
}

async function deleteTech(req, res){
    try{
        await Technology.findByIdAndDelete(req.params.id);
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err);
    }
}

async function update(req, res){
    try{
        const updatedTech = await Technology.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedTech);
    }catch(err){
        res.status(400).json('Bad Request');
    }
}

async function findTechnologiesByIds(req, res) {
    try {
        const techIds = req.query.ids.split(',');
        const filteredTechnologies = await Technology.find({ _id: { $in: techIds } });
        res.status(200).json(filteredTechnologies);
    } catch (err) {
        res.status(400).json(err);
    }
}
