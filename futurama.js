const request = require('superagent');

//SuperAgent
request 
  .get('http://futuramaapi.herokuapp.com/api/quotes/6')
  .then(res => {
    res.body;
    console.log(res.body);
  });

// //the futurama api page docs specify how to query for one character
// //above returns 5 bender quotes

// const dog = {
//   name: 'spot',
//   age: 2
// };
// console.log(dog);


//SuperAgent Again
// request
//   .get('http://futuramaapi.herokuapp.com/api/characters/bender/5')
//   .then(res => {
//     //setTimeout(res, 90000, 'do stuff');
//     res.body;
//     console.log(res.body);
//   });

//setTimeout(resolve, 100, 'foo');
Promise.all([
  request.get('http://futuramaapi.herokuapp.com/api/characters/bender/5'),
  request.get('http://futuramaapi.herokuapp.com/api/characters/bender/5'),
  request.get('http://futuramaapi.herokuapp.com/api/character/bender/5')
    .then(([result1, result2, result3]) => {
      console.log(result1.body, result2.body, result3.body);
    })
]);

// Server
