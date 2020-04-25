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

    res.send(createdToken);

  } catch (e) {

    res.status(400).send(e);
  }
});


/* get all places in a rect from (latStart,lngStart) to (latEnd,lngEnd). 
Start is presumed to be smaller number: xxxStart < xxxEnd */

router.get('/places/area', AM, async(req,res)=>{

  try{

    let {latStart: s1,lngStart: s2,latEnd:e1,lngEnd:e2} = req.body;
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
router.get('/places/:id', AM, async(req,res)=>{
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