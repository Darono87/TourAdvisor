const bcrypt = require("bcryptjs");
const s = require('sequelize');

const User = (DB) => {

  class User extends s.Model{
    async hashPassword(instance){
      //instance.dataValues.password 
      var salt = await bcrypt.genSalt(15);
      instance.dataValues.password  =
       await bcrypt.hash(instance.dataValues.password,salt);
    }
  };
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
          notNull: true,
          notEmpty: true
        }
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

module.exports = User;