const s = require('sequelize');
const {User} = require('./user');

const Token = (DB) =>{

  class Token extends s.Model{
  }

  Token.init({
    token: {
      type: s.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    uid:{
      type: s.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, { 

    sequelize: DB,
    modelName: 'token' 

  });

  return Token;
}
module.exports = Token;