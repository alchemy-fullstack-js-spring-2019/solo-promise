const request = require('superagent');

request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => {
        console.log(res.body)
    });