const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(results => {
    return Promise.all(
      results.body.results.filter(character => character.origin.url !== '').map(character => {
        return request
          .get(character.origin.url)
          .then(res => res.body.name);
      })
    );
  })
  .then(console.log);
