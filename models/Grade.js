const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema({
  
  },{
    timestamps:true
  })
  
  module.exports = mongoose.model('Grade', gradeSchema)