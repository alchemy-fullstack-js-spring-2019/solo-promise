const request = require('superagent');

// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => console.log(res.body));

// request
//   .get('futuramaapi.herokuapp.com/api/characters/bender/5')
//   .then(res => console.log(res.body));

request
  .get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(characters => {
    return characters.map(character => character.origin.url);
  })
  .then(characterLocationURLS => characterLocationURLS.filter(url => url !== ''))
  .then(characterLocationURLS => {
    return Promise.all(characterLocationURLS.map(url => {
      return request.get(url).then(res => res.body);
    }));
  })
  .then(console.log);
  


  

