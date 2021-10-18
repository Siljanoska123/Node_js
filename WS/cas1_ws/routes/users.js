const express = require('express');
const router = express.Router();
const users = require('../contollers/users')

/* GET users listing. */
router

.post('/', users.postUser)

.post('/logIn', users.postLogIn)


module.exports = router;
