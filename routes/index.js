const express = require('express');
const router  = express.Router();
const Student = require('../models/Student')
const pool = require('../database')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/login/teacher', (req, res) =>{
  res.render('login');
})
router.get('/login/student', (req, res) => {
  res.render('login-student')
})
router.get('/help', (req, res) => {
  res.render('help')
})




module.exports = router;
