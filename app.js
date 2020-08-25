const express = require('express')
const exphbs = require('express-handlebars').create({ defaultLayout: main })
const port = process.env.PORT || 1333
const app = express()

app.use(express())

app.engine('handlebars', exphbs)
app.set('view engine', exphbs)

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
