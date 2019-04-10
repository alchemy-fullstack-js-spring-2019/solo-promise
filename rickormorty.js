const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    // console.log(res.body.results);
    return Promise.all(
      res.body.results.filter(char => char.origin.url !== '').map(char => {
        return request
          .get(char.origin.url)
          .then(res => res.body.name);
      })
    );
  })
  .then(console.log);


// Promise.all([
//   request.get('https://rickandmortyapi.com/api/character/1'),
//   request.get('https://rickandmortyapi.com/api/character/4'),
//   request.get('https://rickandmortyapi.com/api/character/6')
// ])
//   .then(function(values) {
//     values.forEach(value => console.log(value.body.origin));
//   });

