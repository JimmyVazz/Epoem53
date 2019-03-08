const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
  name:String,
  apePat:String,
  apeMat: String,
  numberRegister: Number,
  genre: String,
  finalGrade: Number,
  procedenceMpio: String,
  year: String,
  group: String,
},{
  timestamps:true
})

module.exports = mongoose.model('Student', studentSchema)