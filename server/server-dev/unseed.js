require('dotenv').config();
require('../config/database');

const Job = require('../models/job');
const Technology = require('../models/technology');

(async function() {

  await Job.deleteMany({});
  await Technology.deleteMany({});

  process.exit();

})();