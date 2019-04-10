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
    // .then(console.log);
}

getQuote()
  .then(console.log);
