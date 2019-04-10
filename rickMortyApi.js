const request = require('superagent');

function getOriginCharacters(characters) {

}

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body.results)
  .then(characters => characters.map(character => character.origin.url))
  .then(characterlocationUrls => characterlocationUrls.filter(url => url !== ''))
  .then(characterlocationUrls => {
    return Promise.all(characterlocationUrls.map(url => {
      return request.get(url).then(res => res.body);
    }))
      .then(console.log);
  });
