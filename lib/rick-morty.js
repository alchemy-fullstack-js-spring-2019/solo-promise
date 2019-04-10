const request = require('superagent');

const url = 'https://rickandmortyapi.com/api/character/';

request
    .get(url)
    .then(res => console.log(res.body.info));
