var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');

router.post('/', controller.create)
      .getAll('/', controller.getAll)
      .getOne('/:id', controller.getOne)
      .delete('/:id', controller.delete)


module.exports = router;
