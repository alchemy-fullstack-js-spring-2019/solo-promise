const request = require('superagent');

request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body)
    .then(console.log);

request
    .get('http://futuramaapi.herokuapp.com/api/characters/Fry/5')
    .then(res => res.body)
    .then(console.log);
