const express = require("express");
const { user,token, place, DB } = require('./models');
const Op = require("sequelize").Op;
const passwordValidate = require("./validations/validatePassword");
const router = express.Router();
const AM = require("./middleware/authorize");

router.post('/register', passwordValidate, async (req, res) => {
  try {
    let newUser = await user.create(req.body);
    res.send({
      message: 'You have been registered. Your client email is: ' +
        req.body.email,
      userData: newUser
    });
  } catch (e) {
    switch (e.name) {
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

router.post('/login', async (req, res) => {
  try {
    let foundUser = await user.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!foundUser || await !foundUser.comparePasswords(req.body.password))
      throw new Error("Wrong credentials provided!");

    const genToken = await foundUser.generateWebtoken();
    const createdToken = await token.create({token:genToken,userId:foundUser.id});

    res.send({nickname: foundUser.nickname,token: genToken});

  } catch (e) {

    res.status(400).send(e);
  }
});

// Logout, we expect that authorization went fine, so we have access to req.requesterID, req.tokenUsed

router.post('/logout', AM, async(req,res)=> {

  try{

    //verified
    const userId = req.requesterID;
    const tokenUsed = req.tokenUsed;

    // remove user's token and all expired tokens
    const result = await token.destroy({
      where: {
        [Op.or]:[
          {
            userId,
            token: tokenUsed
          },
          {
            createdAt: {
              [Op.lt]: new Date(new Date() - process.env.LOGTIME)
            }
          }
        ]
        
      }
    });

    res.send(tokenUsed);

  }catch(e){
    
    res.status(500).send(e);

  }

});

//Logout from every device currently connected

router.post('/logout/all',AM,async(req,res)=>{

  try{

    const userId = req.requesterID;
    const result = await token.destroy({
      where: {
        userId
      }
    });

    res.send();

  }catch(e){

    res.status(500).send(e);

  }

});


/* get all places in a rect from (latStart,lngStart) to (latEnd,lngEnd). 
Start is presumed to be smaller number: xxxStart < xxxEnd */

router.get('/places/area', async(req,res)=>{

  try{

    let {latStart: s1,lngStart: s2,latEnd:e1,lngEnd:e2} = req.query;
    let results = await place.findAll({where:{
      
      latitude: {
        [Op.between]: [s1,e1]
      },
      longitude: {
        [Op.between]: [s2,e2]
      }

    }});
    
    res.send(results);

  } catch(e){

    res.status(400).send(e);

  }
  
});

/* get one place identified by ID - endpoint */
router.get('/places/:id', async(req,res)=>{
  try{
    let ID = req.params.id;
    let results = await place.findAll({where: {
      id: ID
    }});
    if(results.length == 0)
      throw new Error("NF1");
    res.send(results);
  } catch(e){
    res.status(404).send("NF1");
  }
    
});




module.exports = router;