const request = require('superagent');

request
    .get('http://futuramaapi.herokuapp.com/api/quotes/2')
    .then(res => {
        console.log(res.body)
    });

request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        console.log(res.body)
    });