const request = require('superagent');

function getOriginCharacters(characters) {
  const deduplicateUrls = [...new Set(characters.map(character => character.origin.url))];
  return Promise.all(
    deduplicateUrls
      .filter(url => url !== '')
      .map(url => request.get(url))
  );

}

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body.results)
  .then(getOriginCharacters);
  

