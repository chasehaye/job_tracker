require('dotenv').config();
require('../config/database');

const Job = require('../models/job');
const Technology = require('../models/technology');

(async function() {

await Technology.deleteMany({});
const technologies = await Technology.create([
    {name: 'java'},
    {name: 'js'},
    {name: 'HTML5'},
    {name: 'CSS'},
    {name: 'Typescript'},
    {name: 'SQL'},
    {name: 'postgres'},
    {name: 'python'},
    {name: 'tailwind'},
    {name: 'bootstrap'},
    {name: 'React'},
    {name: 'MERN'},
]);
await Job.deleteMany({});
const jobs = await Job.create([
    {
        jobName: 'A', 
        jobTitle: 'null',
        jobTechnologies: [technologies[1], technologies[4], technologies[6]]
    },
    {
        jobName: 'B', 
        jobTitle: 'intern',
        jobTechnologies: [technologies[1], technologies[3], technologies[6]]
    },
    {
        jobName: 'C', 
        jobTitle: 'full',
        jobTechnologies: [technologies[5], technologies[4], technologies[6]]
    },
]);


  console.log(jobs)
  console.log(technologies)

  process.exit();

})();