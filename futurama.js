const request = require('superagent');

request
    .get('http://futuramaapi.herokuapp.com/api/characters/Fry/4')
    .then(res => {
        return res.body;
    })
    .then(console.log);
