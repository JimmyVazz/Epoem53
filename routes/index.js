const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/login-teacher/', (req, res) =>{
  res.render('login-teacher');
})
router.get('/login-student', (req, res) => {
  res.render('login-student')
})
router.get('/help', (req, res) => {
  res.render('help')
})


module.exports = router;
