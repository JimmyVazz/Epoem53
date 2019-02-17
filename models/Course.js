const mongoose = require('mongoose')
const Schema = mongoose.Schema

//CRUD
//In this part we create the relation between Students and Assignments


const courseSchema = new Schema({
  name:String,
  turn:String,
  numberRegister: Number,
  teacher: String,
  scale: {
    type: String,
  },
  imageURL:String
},{
  timestamps:true
})

module.exports = mongoose.model('Course', courseSchema)