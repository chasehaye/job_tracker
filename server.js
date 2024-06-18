const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));




app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/tech', require('./routes/api/technologies'));




if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}else{
  app.get('/', function(req, res) {
    res.send('api online');
  });
}
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});