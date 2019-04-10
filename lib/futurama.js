const request = require('superagent');

// request
//   .get('https://futuramaapi.herokuapp.com/api/quotes/')
//   .then(data => {
//     console.log(data.body);
//   })
// ;

// request
//   .get('https://futuramaapi.herokuapp.com/api/quotes/1')
//   .get('/search')
//   .query({ query: 'Bender' })
//   .then(data => {
//     console.log(data);
//   })
// ;

request
  .get('https://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.body)
  .then(console.log);


function getCharacterQuotes(character, n = 1) {
  return request
    .get('https://futuramaapi.herokuapp.com/api/characters/${characer}/${counter}')
    .query({ name: 'Bender' })
    .then(res => res.body);
}

getCharacterQuotes('Bender', 5)
  .then(console.log);
