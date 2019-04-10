const request = require('superagent');

request.get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(characters => characters.map(character => character.origin.url).filter(url => url))
  .then(urls => new Set(urls))
  .then(urlSet => Promise.all([...urlSet].map(url => request.get(url))))
  .then(responses => responses.map(response => ({ id: response.body.id, name: response.body.name, type: response.body.type })))
  .then(console.log);
