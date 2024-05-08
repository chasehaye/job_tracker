require('dotenv').config();
require('../config/database');

// Require the Mongoose models
const Job = require('../models/job');
const Technology = require('../models/technology');

// Local variables will come in handy for holding retrieved documents
let job, technology;
let jobs, technologies;