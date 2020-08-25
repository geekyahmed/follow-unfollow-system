const User = require('./models/user')
const bcrypt = require('bcryptjs')

const hashPassword = user => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash
    })
  })
}

module.exports = {
  getRegisterPage: async (req, res) => {
    res.render('default/register')
  },
  registerUser: async (req, res) => {
    const { name, username, password, email } = req.body
    const newUser = new User({
      email: email,
      name: name,
      username: username,
      password: hashPassword(newUser)
    })
    User.findOne({ email: email }).then(user => {
      if (user) {
        console.log('User Already Exisits')
        res.redirect('/login')
      } else {
        newUser.save().then(savedUser => {
          console.log(`User saved ${savedUser}`)
          res.redirect('/login')
        })
      }
    })
  }
}
