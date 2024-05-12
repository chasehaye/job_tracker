const Technology = require('../../models/technology');

module.exports = {
    index,
    create,
    detail,
    deleteTech,
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