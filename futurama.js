const request = require('superagent');

//SuperAgent
//good
request 
  .get('http://futuramaapi.herokuapp.com/api/quotes/6')
  .then(res => {
    res.body;
    console.log('gets 6 quotes', res.body);
  });

//the futurama api page docs specify how to query for one character
//above returns 5 bender quotes

const dog = {
  name: 'spot',
  age: 2
};
console.log(dog);

//good
request
  .get('http://futuramaapi.herokuapp.com/api/characters/bender/5')
  .then(res => {
    res.body;
    console.log('gets 5 Bender objects', res.body);
  });

// pending state - waiting for promise to finish
// fulfilled - finished and resolved
// rejected - finished and rejected

//***
//modeling from ryan's example

// function getPromiseAll(character) {

//   return Promise.all([
//     request.get(character),
//     request
//       .get('http://futuramaapi.herokuapp.com/api/characters/bender'),
//     request
//       .get('http://futuramaapi.herokuapp.com/api/character/bender')
//       .then(([result1, result2, result3]) => {
//         console.log('lists all objects', result1.body, result2.body, result3.body);
//       })
//   ]);
// }

// Server
