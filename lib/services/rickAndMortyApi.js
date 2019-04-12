const request = require('superagent');

module.exports = function getCharacter(id) {
  return request
    .get(`http://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
};




