const request = require('superagent');

function getCharacters() {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => res.body);
}

getCharacters()
  /*eslint-disable-next-line*/
  .then(console.log);
