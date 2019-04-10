const fs = require('fs');
const request = require('superagent');

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    request.get(`https://rickandmortyapi.com/api/character/${id}'`)
      .then(res => {
        return {
          name: res.body.name,
          status: res.body.status,
          species: res.body.species 
        };
      });
    resolve();
  });
}

module.exports = getCharacter;
