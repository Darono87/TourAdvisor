const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const DB = require('./src/connection');

const application = express();
application.use(cors());
application.use(morgan('short'));
application.use(bodyParser.json());

application.post('/register', (req, res)=>{
  res.send({
    message: 'Backend has received your data. Your client email is: ' +
    req.body.email,
  });
});

DB
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

application.listen(process.env.PORT || '3001');
