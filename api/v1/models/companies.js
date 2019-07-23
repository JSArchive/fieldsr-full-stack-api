const mongoose = require('mongoose')
const employeeSchema = require('./employees')
require('mongoose-type-email');



//Define Company Schema
const schema = new mongoose.Schema({
  name: String,
  contact_email: [{type: mongoose.SchemaTypes.Email}], // Validate e-mail address.
  employees: [employeeSchema]
})

module.exports = (schema)