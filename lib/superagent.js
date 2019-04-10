const request = require('superagent');

function quotes(character, count = 1) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);

}

quotes('Bender', 5)
  .then(console.log);
