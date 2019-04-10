const request = require('superagent');


// request
//   .get('http://futuramaapi.herokuapp.com/api/quotes/1')
//   .then(res => 
//     res.body)
//   .then(console.log);

// function getQuote() {
//   return request
//     .get('http://futuramaapi.herokuapp.com/api/quotes/1')
//     .then(res => 
//       res.body);
// }

// getQuote()
//   .then(console.log);

// function getCharacterQuote() {
//   return request
//     .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
//     .then(res => 
//       res.body);
// }

// getCharacterQuote('bender', 5)
//   .then(console.log);

function poopyButthole() {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res =>
      res.body);
}

poopyButthole()
  .then(console.log); 


Promise.all([
  request.get('https://rickandmortyapi.com/api/character/20'),
  request.get('https://rickandmortyapi.com/api/character/19'),
  request.get('https://rickandmortyapi.com/api/character/14')
    .then(([result1, result2, result3]) => {
      console.log(result1.body, result2.body, result3.body);
    })

]);



