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
    .get('http://futuramaapi.herokuapp.com/api/characters/bender')
    .then(res => {
        console.log(res.body);    
    })
    .catch(err => {
        if(err) throw err;
    });

//Rick and morty    
superagent
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        console.log(res.body.results);
    })
    .catch(err => {
        if(err) throw err;
    });

//origins    
superagent
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => res.body.results)
    .then(characters => [...new Set(characters.map(character => character.origin.url))]) //remove duplicates
    .then(characterLocationUrls => characterLocationUrls.filter(url => url !== ''))  //filtering out empty strings from the array of locations
    .then(characterLocationUrls => {
        return Promise.all(characterLocationUrls.map(url => {
            return superagent.get(url).then(res => res.body.name);
        }));
    })
    .then(console.log)
    .catch(err => {
        if(err) throw err;
    });
