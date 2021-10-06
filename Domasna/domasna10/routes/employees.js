var express = require('express');

var router = express.Router();


const controller = require('../controllers/employees')


router.get('/', controller.getAll)
      .get('/new', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id',controller.postUpdate)

module.exports = router;