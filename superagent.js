const superagent = require('superagent');

superagent
  .get('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(data => {
    console.log(data.body);
  });

superagent
  .get('http://futuramaapi.herokuapp.com/api/quotes/2')
  .then(data => {
    console.log(data.body);
  });

superagent
  .get('http://futuramaapi.herokuapp.com/api/characters/bender')
  .then(data => {
    console.log(data.body);
  });

superagent
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body)
  .then(characters => {
    return characters.results.map(character => character.origin.url);
  })
  .then(urlArray => {
    return urlArray.filter(location => location !== '');
  })
  .then(filteredUrls => [...new Set(filteredUrls)])
  .then(uniqueUrls => {
    return Promise.all(
      uniqueUrls.map(url => {
        return superagent.get(url).then(res => res.body);
      })
    );
  })
  .then(locations => console.log(locations)); 
