const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    jobTechnologies: [
        { type: Schema.Types.ObjectId, ref: 'Technology' }
    ],
    jobDescription: { type: String, },
    jobLocation: {
        address: {type: String},
        city: { type: String },
        state: { type: String},
        zip: { type: Number }
    },
    payPerYear: { type: Number, default: 0 },
    companySiteLink: { type: String },
    companyApplicationSiteLink: { type: String },
    recruitingPlatform: { type: String },
    contactInfoCompany: {
        name: { type: String },
        email: { type: String },
        phone: { type: Number }
    },
    contactInfoHiringManager: {
        name: { type: String },
        email: { type: String },
        phone: { type: Number }
    },
    status: {
        type: String,
        enum: ['Pending', 'Interviewing', 'Offered', 'Accepted', 'Rejected', 'Stalled'],
        default: 'Pending',
        required: 'true'
    },
    favorite: { 
        type: Boolean, 
        default: false,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;