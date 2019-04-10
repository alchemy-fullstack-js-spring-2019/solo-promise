const request = require('superagent');

// SINGLE QUOTE
request
  .get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));

// ALL QUOTES
request
  .get('http://futuramaapi.herokuapp.com/api/quotes')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));

// 2 BY BENDER
request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/2')
  .then(res => res.body)
  .then(console.log)
  .catch(err => console.error(err));
