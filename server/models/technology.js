const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    name: { type: String, required: true },
    favorite: { 
        type: Boolean,
        required: true,
        default: false
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology;