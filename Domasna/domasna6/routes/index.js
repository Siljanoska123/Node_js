var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Express', 
    name: 'Boban', 
    names: ['Maja', 'Sanja', 'Tina'],
    countries:[{ime:'Macedonia'}, 
                {ime:'Germany'},
                {ime: 'Spain'}] });
});

module.exports = router;
