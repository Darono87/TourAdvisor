const express = require("express");

const router = express.Router();

router.post('/register', (req, res)=>{
  res.send({
    message: 'Backend has received your data. Your client email is: ' +
    req.body.email,
  });
});

module.exports = router;