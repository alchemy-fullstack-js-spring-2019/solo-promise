const request = require('superagent');

request.get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(characters => characters.map(character => character.origin.url).filter(url => url))
  .then(urls => [...new Set(urls)])
  .then(reducedUrls => Promise.all(
    reducedUrls
      .map(url => request.get(url)
        .then(res => res.body))))
  .then(responses => responses.map(response => ({ id: response.id, name: response.name, type: response.type })))
  .then(console.log);
