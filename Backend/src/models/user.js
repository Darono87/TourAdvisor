const User = (DB, Sequalize) => DB.define('user',{
  email: {
    type: Sequalize.STRING,
    unique: true
  },
  password: Sequalize.STRING
})

module.exports = User;