const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  password: {
    type: String,
    min: 4,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('user', UserSchema)
module.exports = User
