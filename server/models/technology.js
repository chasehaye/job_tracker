const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    name: { type: String, required: true },
    favorite: { 
        type: Boolean,
        required: true,
        default: false
    }
});

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology;