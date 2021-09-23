var express = require('express');
var router = express.Router();

const cars = [];

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Express', name: 'Boban', cars: cars });
      })
      .post('/cars', (req, res) => {
        cars.push(req.body);
        res.redirect('/');
      });

module.exports = router;
