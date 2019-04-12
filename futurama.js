const request = require('superagent');




function getQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => 
      res.body);
}

getQuote();


function getCharacterQuote() {
  return request
    .get('http://futuramaapi.herokuapp.com/api/characters/')
    .then(res => 
      res.body);
}

getCharacterQuote('bender', 5);


function poopyButthole() {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res =>
      res.body);
}

poopyButthole();


Promise.all([
  request.get('https://rickandmortyapi.com/api/character/20'),
  request.get('https://rickandmortyapi.com/api/character/19'),
  request.get('https://rickandmortyapi.com/api/character/14')
    .then(([result1, result2, result3]) => {
      return (result1.body, result2.body, result3.body);
    })

]);



