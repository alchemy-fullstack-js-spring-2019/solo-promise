const request = require('superagent');

function getOrigins(character) {
  request
    .get('https://rickandmortyapi.com/api/character/?');
  return Promise.all([
    request
      .get(`https://rickandmortyapi.com/api/character/?name=${character}`)
    //   .get(`https://rickandmortyapi.com/api/character/?origin=${origin}`)
  ])
    .then(result => result.body);
}

getOrigins('beth')
  .then();
