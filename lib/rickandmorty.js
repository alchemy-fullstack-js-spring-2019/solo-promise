const request = require('superagent');

// RETURN ORIGIN OF ONE RESULT
// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => res.body.results)
//   .then(console.log)
//   .catch(err => console.error(err));

// PROMISE ALL
// Promise.all([
//   request.get('https://rickandmortyapi.com/api/character/'),
//   request.get('https://rickandmortyapi.com/api/character/'),
//   request.get('https://rickandmortyapi.com/api/character/'),
// ])
//   .then(([a, b, c]) => {
//     console.log([a.body.results[0].name]);
//     console.log([b.body.results[1].name]);
//     console.log([c.body.results[2].name]);
//   })
//   // .then(console.log)
//   .catch(err => console.error(err));

// FOR LOOP TO RETURN ORIGIN - WHY DO WE NEED PROMISE ALL?
request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body.results)
  .then(char => {
    char.forEach(character => {
      // request.get(character.origin);
      console.log(character.origin);
    });
  });
