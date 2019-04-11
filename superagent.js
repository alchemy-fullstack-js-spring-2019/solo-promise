const request = require('superagent');

//get a promise with a list of characters
request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => console.log(res.body));

//get a number of quotes from a certain character
request
  .get('futuramaapi.herokuapp.com/api/characters/bender/5')
  .then(res => console.log(res.body));

//use in request to get single character origins
function getCharacterOrigin(characters) {
  const setUrls = [...new Set(characters.map(character => character.origin.url))];
  return Promise.all(
    setUrls
      .filter(url => url !== '')
      .map(url => request.get(url)
        .then(res => res.body.name)));
}

//initial request to get characters and call getCharacterOrigin on results
request
  .get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(getCharacterOrigin)
  .then(console.log);



  

