/* Importing Different Modules */
const express = require('express')
const port = process.env.PORT || 1300
const path = require('path')
const hbs = require('express-handlebars')
const session = require('express-session')
const passport = require('passport')
const connectDB = require('./config/db')
const app = express()

/* Configure express*/
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.static(path.join(__dirname, 'public')))

/*  Flash and Session*/
app.use(
  session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
  })
)

connectDB()

/* Passport Initialize */
app.use(passport.initialize())
app.use(passport.session())

/* Setup View Engine To Use Handlebars */
app.engine(
  'handlebars',
  hbs({
    defaultLayout: 'default'
  })
)
app.set('view engine', 'handlebars')

/* Start The Server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
