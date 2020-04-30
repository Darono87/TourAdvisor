const bcrypt = require("bcryptjs");
const s = require('sequelize');
const jwt = require("jsonwebtoken");

class User extends s.Model{
  async hashPassword(instance){
    //instance.dataValues.password 
    var salt = await bcrypt.genSalt(15);
    instance.dataValues.password  =
     await bcrypt.hash(instance.dataValues.password,salt);
  }
  async comparePasswords(toCompare){
    return await bcrypt.compare(toCompare,this.password);
  }
  async generateWebtoken(){
    const payload = {
      id: this.id
    }
    return await jwt.sign(payload,process.env.JWTSECRET,{ expiresIn: parseInt(process.env.LOGTIME) });
  }
};

const UserInit = (DB) => {
  User.init({
      email: {
        type: s.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: s.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      nickname: {
        type: s.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [5,12],
          is: /^[a-zA-Z0-9]+$/
        }
      },
      newsletter: {
        type: s.BOOLEAN,
        defaultValue: false
      }
    }, { 

    hooks:{
      async beforeUpdate(instance, options){
        await instance.hashPassword(instance);
      },
      async beforeSave(instance, options){
        await instance.hashPassword(instance);
      }
    },    
    sequelize: DB,
    modelName: 'user' 
  });

  return User;
};

module.exports = {User,UserInit};