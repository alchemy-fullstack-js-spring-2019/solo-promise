const request = require('superagent');

function quotes(character, count = 1) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

quotes('Bender', 5)
  .then(console.log);


function rickMorty(name) {
  return request
    .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => res.body);
}

rickMorty('Rick')
  .then(console.log);


function getOriginForCharacters(characters) {
  const dedupe = [...new Set(characters
    .map(char => char.origin.url))];
  return Promise.all(
    dedupe
      .filter(url => url !== '')
      .map(url => request.get(url)
        .then(res => res.body.name))
  );
}


request
  .get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(getOriginForCharacters)
  .then(console.log);
