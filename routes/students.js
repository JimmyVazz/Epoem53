const router = require('express').Router()
const Student = require('../models/Student')

//We are goin to create a model CRUD
//1. Create
//2. Read
//3. Update
//4. Delete

//Create student form
router.get('/new', (req, res)=>{
  res.render('students/form')
})
//Create student backend
router.post('/new',(req, res)=>{
  console.log(req.body)
  Student.create(req.body)
    .then(student=>{
      res.redirect('/students')
    }).catch(e=>res.render('error'))
})

//Read student backend
router.get('/',(req, res)=>{
  Student.find()
    .then(students=>{
      res.render('students/list',{students})
    }).catch(e=>res.render('error'))
})


module.exports = router