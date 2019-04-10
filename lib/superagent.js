const superagent = require('superagent');

//Multiple quotes
superagent
    .get('http://futuramaapi.herokuapp.com/api/quotes/5')
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        if(err) throw err;
    });

//Bender
superagent
    .get('futuramaapi.herokuapp.com/api/characters/bender')
    .then(res => {
        console.log(res.body);    
    })
    .catch(err => {
        if(err) throw err;
    });

superagent
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        if(err) throw err;
    });
