const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentSchema = new Schema({
  name:String,
  apePat:String,
  apeMat: String,
  numberRegister: Number,
  genre: String,
  year: {
    type: String,
    enum: ['PRIMERO', 'SEGUNDO', 'TERCERO']
  },
  imageURL:String
},{
  timestamps:true
})

module.exports = mongoose.model('Student', studentSchema)