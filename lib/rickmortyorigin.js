const request = require('superagent');

request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => res.body.results)
    .then(characters => characters.map(character => character.origin.url))
    .then(characterLocationUrls => characterLocationUrls.filter(url => url !== ''))
    .then(characterLocationUrls => {
        return Promise.all(characterLocationUrls.map(url => {
            return request.get(url).then(res => res.body);
        }));
    })
    .then(console.log);
