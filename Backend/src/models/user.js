const User = (DB, Sequalize) => DB.define('user',{
  email: {
    type: Sequalize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequalize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
})

module.exports = User;