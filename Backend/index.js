const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const {DB} = require('./src/models');
const router = require('./src/router');

const application = express();
application.use(cors());
application.use(morgan('short'));
application.use(bodyParser.json());
application.use(router);

DB
    .sync()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

application.listen(process.env.PORT || '3001');
