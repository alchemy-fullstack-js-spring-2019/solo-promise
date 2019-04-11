const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => res.body.results)
  .then(res => [...new Set(res.map(item => item.origin.url).filter(item => item !== ''))])
  .then(characterUrl => {
    return Promise.all(characterUrl.map(url => { 
      return request.get(url)
        .then(res => res.body);
    }));
  })
  .then(console.log);

