const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
  name:String,
  apePat:String,
  apeMat: String,
  numberRegister: Number,
  genre: String,
  procedenceMpio: String,
  type: String,
},{
  timestamps:true
})

module.exports = mongoose.model('Teacher', teacherSchema)