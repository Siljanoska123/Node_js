var express = require('express');
var router = express.Router();

const employees = [];

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Express', name: 'Boban', employees: employees });
      })
      .post('/employees', (req, res) => {
        employees.push(req.body);
        res.redirect('/');
      });

module.exports = router;
