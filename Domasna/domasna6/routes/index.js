var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Express', 
    name: 'Boban', 
    names: ['Maja', 'Sanja', 'Tina'],
    countries:['Macedonia', 'Germany', 'Spain'] });
});

module.exports = router;
