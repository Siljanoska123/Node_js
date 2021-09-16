const express = require('express');
const app = express();

app.use(express.json());

let countries = [
    {
        id:1,
        name: 'Macedonia',
        language: 'Macedonian'

    }
]; 

app

    .get('/countries',(req, res) => {
        res.send(countries)
    })

    .get('/countries/:id',(req, res) => {
        const country = countries.find(country => country.id == req.params.id);
        res.send(country)
    })
    
    .post('/countries', (req, res) => {
        countries.push(req.body);
        res.send(countries);
    })

    .patch('/countries/:id', (req, res) => {
        countries.forEach(country => {
            if(country.id == req.params.id) {
                if(req.body.name) {
                    country.name = req.body.name
                }
                if(req.body.language) {
                    country.language = req.body.language
                }
            }
        })
        res.send(countries)
    })

    .put('/countries/:id', (req, res) => {
        countries.forEach(newCountry => {
          if (newCountry.id == req.params.id) {
           newCountry.name = req.body.name;
           newCountry.language = req.body.language;
           newCountry.id = req.body.id
          }
        });
        res.send(countries);
      })

    .delete('/countries/:id', (req, res) => {
        const country = countries.find(country => country.id === req.params.id);
        const index = countries.indexOf(country);
        todos [index] = req.body
    
        res.send(req.body);
      })
    
    app.listen('3001', () => {
      console.log('We can start port 3001');
    });
