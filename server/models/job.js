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
        state: { type: String}
    },
    payPerYear: { type: Number, default: 0 },
    companySiteLink: { type: String },
    compnayApplicationSiteLink: { type: String },
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
    applicationEditDate: { 
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Interviewing', 'Offered', 'Accepted', 'Rejected'],
        default: 'Pending',
        required: 'true'
    }
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;