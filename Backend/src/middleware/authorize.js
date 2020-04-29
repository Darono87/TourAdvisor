
const jwt = require("jsonwebtoken");
const { token: tokenModel } = require("../models");

const authorize = async (req, res, next) => {

  let fToken = req.headers.authorization;
  let token = fToken.substr(7, fToken.length);

  try {

    let results = await jwt.verify(token, process.env.JWTSECRET);
    req.requesterID = results.id;
    req.tokenUsed = token;

    const result = await tokenModel.findAll({
      where: {
        userId: results.id,
        token: token
      }
    });

    if (result == 0)
      throw new Error();

    next();

  } catch (e) {
    if (e.name == "TokenExpiredError") {

      await tokenModel.destroy({
        where: {
          token
        }
      });

      res.status(401).send("EXP");
    }
    res.status(401).send();

  }
}


module.exports = authorize;