const request = require('superagent');

request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body)
    .then(console.log);
//get a single quote, console log
//then get 5 quotes
//then get  a quote by bender

request
    .get('http://futuramaapi.herokuapp.com/api/characters/Fry/5')
    .then(res => res.body)
    .then(console.log);

