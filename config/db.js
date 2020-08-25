const mongoose = require('mongoose')

const db = {
  uri: 'mongodb://localhost:27017/follow-system'
}

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: 1
}

const connectDB = () => {
  mongoose
    .connect(db.uri, opts)
    .then(() => {
      console.log('MongoDB Connection Successful.')
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = connectDB
