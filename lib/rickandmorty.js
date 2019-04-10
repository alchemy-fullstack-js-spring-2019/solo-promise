const request = require('superagent');

// RETURN ORIGIN OF ONE RESULT
request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body.results[1].origin)
  .then(console.log)
  .catch(err => console.error(err));

// PROMISE ALL
// Promise.all([
//   request.get('https://rickandmortyapi.com/api/character/'),
//   request.get('https://rickandmortyapi.com/api/character/'),
//   request.get('https://rickandmortyapi.com/api/character/')
// ])
//   .then(([a, b, c]) => {
//     console.log([a.body]);
//     console.log([b.body]);
//     console.log([c.body]);
//   })
//   // .then(console.log)
//   .catch(err => console.error(err));
