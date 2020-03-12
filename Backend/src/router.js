const express = require("express");
const {user} = require('./models')
const router = express.Router();

router.post('/register', async (req, res)=>{
  try{
    let newUser = await user.create(req.body);
    res.send({
      message: 'Backend has received your data. Your client email is: ' +
      req.body.email,
      userData: newUser
    });
  }catch(e){
    res.status(400).send({
      message: 'Something has gone wrong'
    });
  }
});

module.exports = router;