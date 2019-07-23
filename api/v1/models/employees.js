const mongoose = require('mongoose')


//Define Employee Schema
const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  preferred_name: String,
  position: String,
  birthday: Date,
  email: String
})
module.exports = (schema)