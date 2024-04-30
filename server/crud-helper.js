require('dotenv').config();
require('./config/database');

const User = require('./models/user');

let user;
let users;