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
    }
  }, { 

    sequelize: DB,
    modelName: 'token' 

  });

  Token.belongsTo(User);

  return Token;
}
module.exports = Token;