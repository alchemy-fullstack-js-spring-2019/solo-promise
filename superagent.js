const request = require('superagent');

// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => console.log(res.body));

// request
//   .get('futuramaapi.herokuapp.com/api/characters/bender/5')
//   .then(res => console.log(res.body));

request
  .get('https://rickandmortyapi.com/api/character/1')
  .then(res => {
    console.log(res.body);
  });

// Promise.all([
//   request
//     .get('https://rickandmortyapi.com/api/character/23'),
//   request
//     .get('https://rickandmortyapi.com/api/character/56'),
//   request
//     .get('https://rickandmortyapi.com/api/character/7'),
// ])
//   .then(data => {
//     console.log(data[0].body.origin.name, data[1].body.origin.name, data[2].body.origin.name);
//   });
  //see photo or maybe just use foreach on initial data received from first get


  

