const request = require('superagent');

request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => res.body)
    .then(console.log);
