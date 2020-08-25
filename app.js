const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const passport = require('passport')
const port = process.env.PORT || 1333
const connectDB = require('./config/db')
const app = express()

//Setting Up Express
app.use(express())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//Connect to MongoDB Database
connectDB()

//Configure Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'default'
  })
)
app.set('view engine', 'handlebars')

//Setting up Passport
app.use(passport.initialize())
app.use(passport.session())
app.use(
  express.urlencoded({
    extended: false
  })
)

//Allow Access For All Origins
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
