

module.exports = (req,res,next)=>{
  const pass = req.body.password;
  const isPass = new RegExp('^[a-zA-Z0-9_]{8,32}$');
  if(isPass.test(pass)){
    //hash
    next();
  }else{
    res.status(400).send({
      err: 'VAL1'
    });
  }
}