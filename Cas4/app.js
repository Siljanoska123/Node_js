const express = require('express');
const app = express();
const users = [{id:1, username:'Ivana'},{id:2,username:'Kalina'}]

app
  .get('/users', (req, res) => {
    res.send(users);
  })
  .get('/', (req, res) => {
    
    res.send('app start')
  })

app.listen('3002')