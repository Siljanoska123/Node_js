var express = require('express');
var router = express.Router();

const cars = []

/* GET users listing. */
router
.get('/', (req, res) => {
  res.render('cars/index', { cars: cars })
})
.get('/addCar', (req, res) => {
  res.render('cars/addCar');
})
.post('/', (req, res) => {
  cars.push(req.body);

  res.redirect('/cars');
})

module.exports = router;
