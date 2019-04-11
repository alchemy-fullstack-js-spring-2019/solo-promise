const request = require('superagent');

// const dog = {
//   name: 'spot',
//   age: 15
// };

//post - create new
//get - get a thing
//put - update a thing
//patch -update thing
//delete - delete a thing

function getCharacterQuotes(character, count = 1){
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(result => console.log(result.body[0].quote));
}


getCharacterQuotes('Bender', 5);
