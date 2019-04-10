const request = require('superagent');

const url = 'http://futuramaapi.herokuapp.com/api/quotes/2';

request
    .get(url)
    .then(res => {
        console.log('\tTWO RANDOM QUOTES')
        res.body.forEach(result => console.log(result.character + ':\n', result.quote));
        console.log('\n');
    });

const urlByName = 'http://futuramaapi.herokuapp.com/api/characters/Bender';

request
    .get(urlByName)
    .then(res => {
        console.log('\tBENDER QUOTES')
        res.body.forEach(result => console.log(result.quote));
        console.log('\n');
    });
