const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const application = express();
application.use(cors());
application.use(morgan('short'));
application.use(bodyParser.json());

application.get('/register', (req, res)=>{
  res.send({
    message: 'Backend test',
  });
});

application.listen(3000);
