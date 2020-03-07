const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

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

application.listen(3000);
