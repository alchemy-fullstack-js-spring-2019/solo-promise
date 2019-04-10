const request = require('superagent');


request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => res.body)
    .then(characters => characters.results.map(character => character.origin.url))
    .then(characterLocationUrls => characterLocationUrls.filter(url => url !== ''))
    .then(characterLocationUrls => {
        return Promise.all(characterLocationUrls.map(url => {
            request.get(url).then(res => res.body);
        }));
    })
    .then(console.log);
//next .then filter out the empty spaces ''
// next .then do promise all
//within promise all map urls
//and make the requests 

// request.get(`https://rickandmortyapi.com/api/character/${character.id}`);
