const mongoose = require('mongoose')
const companySchema = require('./companies')


//Define Unit Schema
const schema = new mongoose.Schema({
  kind: { 
    type: String, // Only the following options should be allowed: "seat", "desk", "small office", "large office", "floor".
    enum : ["seat", "desk", "small office", "large office", "floor"]
  },
  floor: Number,
  special_monthly_offer: Number,
  company: [companySchema]

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Units', schema)
