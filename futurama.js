const request = require('superagent');

// POST - create a new thing
// GET - get a thing
// PUT - update a thing in its entirety
// PATCH - partially update a thing
// DELETE - delete a thing

request
  // .get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/1')
  .then(res => res.body)
  .then(console.log)

// function getCharacterQuotes(character, count = 1) {
//   return request
//   .get(`http://futuramaapi.herokuapp.com/api/${characters}/${count}`)
//   .then(res => res.body);
// }

// getCharacterQuotes('Bender', 1')
//   .then(console.log);
