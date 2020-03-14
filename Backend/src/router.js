const express = require("express");
const {user} = require('./models');
const passwordValidate = require("./validations/validatePassword");
const router = express.Router();


router.post('/register', passwordValidate, async (req, res)=>{
  try{
    let newUser = await user.create(req.body);
    res.send({
      message: 'You have been registered. Your client email is: ' +
      req.body.email,
      userData: newUser
    });
  }catch(e){
    switch(e.name){
      case 'SequelizeValidationError':
        res.status(400).send({
          err: 'VAL1'
        });
        break;
      case 'SequelizeUniqueConstraintError':
        res.status(400).send({
          err: 'MAIL1'
        });
        break;
      default:
        res.status(500).send({
          err: 'UN'
        });
        break;
    }
  }
});

module.exports = router;