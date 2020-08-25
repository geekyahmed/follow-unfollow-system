const express = require('express')
const exphbs = require('express-handlebars')
const port = process.env.PORT || 1333
const connectDB = require('./config/db')
const app = express()

app.use(express())

connectDB()

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'default'
  })
)
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
