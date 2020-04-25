
const jwt = require("jsonwebtoken");

const authorize = async (req,res,next) => {
  try{
    let fToken = req.headers.authorization;
    let token = fToken.substr(7,fToken.length);
    let results = await jwt.verify(token,process.env.JWTSECRET);
    req.requesterID = results.id;
    req.tokenUsed = token;
    next();
  }catch(e){
    res.status(401).send();
  }
}


module.exports = authorize;