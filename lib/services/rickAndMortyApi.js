const request = require('superagent');

module.exports = function getCharacter(id) {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
        name: res.body.name,
        species: res.body.species,
        status: res.body.status
      }));
}

//once we get the character, we're returning an object with name, species, status
