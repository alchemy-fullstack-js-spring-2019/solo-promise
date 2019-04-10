const request = require('superagent');
// FUTURAMA
request
  .get('http://futuramaapi.herokuapp.com/api/quotes/11')
  .then(res => res.body)
  .then(console.log);

// Gets quotes by various characters
// if you want a specific character.... change quotes to characters/CHARNAME/#oFQuotes


// function getCharacterQuotes(character, count =1) {
// return request
// .get(http...com/api/characters/${character}/${count})
// .then()
// }

// PUT - update a thing in its entirety
// PATCH- update a thing
// GET- Get a thing
// POST- create a new thing
// Delete - delete a thing

