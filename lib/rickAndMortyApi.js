const request = require('superagent');

function getCharacter(id){
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(char => {
      console.log(char.body.);
      console.log(char.body.status);
      console.log(char.body.species);
    });
}

module.exports = getCharacter;
