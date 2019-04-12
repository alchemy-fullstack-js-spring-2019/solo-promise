const request = require('superagent');

function getCharacterQuotes(character, count) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

getCharacterQuotes('Bender', 5)
  /*eslint-disable-next-line*/
  .then(console.log);
