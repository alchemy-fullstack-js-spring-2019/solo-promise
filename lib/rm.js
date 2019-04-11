const request = require('superagent');
//general request
// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => res.body)
//   .then(console.log)
// ;

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
