const request = require('superagent');
// superagent is a way to call an API from the back end

//POST - create a new thing
// GET - get a thing
// PUT - update a thing in its entirety (put it there)
// PATCH - partially update a thing (patch some of it)
// DELETE - delete a thing

function getCharacterQuotes(character, count) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

getCharacterQuotes('Bender', 5)
  /*eslint-disable-next-line*/
  .then(console.log);
