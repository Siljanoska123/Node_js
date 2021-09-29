const e = require('express');
var express = require('express');
var router = express.Router();

const employees = [];

router
    .get('/', (req, res, next) => {
    res.reneder('employees/index');
    })
    .get('/new', (req,res) => {
        res.render('employees/new')
    })
    .post('/', (req,res) => {
        employees.push(req.body)

        res.redirect('/employees')
    })


module.exports = router;
