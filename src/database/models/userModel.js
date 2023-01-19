const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  password: String, username: String, role: String
})

const userModel = mongoose.model('userModel', userSchema, 'users')

module.exports = userModel
