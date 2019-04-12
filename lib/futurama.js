const request = require('superagent');

function getCharacterQuotes(character, count = 1) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

getCharacterQuotes('Bender', 5)
  .then(console.log);
