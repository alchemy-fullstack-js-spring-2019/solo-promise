const request = require('superagent');


// request
//   .get('http://futuramaapi.herokuapp.com/api/quotes/1')
//   .then(res => 
//     res.body)
//   .then(console.log);

function getQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => 
      res.body);
}

getQuote()
  .then(console.log);

function getCharacterQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/characters/${character}/1')
    .then(res => 
      res.body);
}

getCharacterQuote('bender', 1)
  .then(console.log);

  