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
