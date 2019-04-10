const request = require('superagent');

function quotes(character, count = 1) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
}

quotes('Bender', 5)
  .then(console.log);


function rickMorty(name) {
  return request
    .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(res => res.body);
}

rickMorty('Rick')
  .then(console.log);


request.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    return res.body.results.map(char => char.origin.url);
  })
  .then(urls => urls.filter(url => url !== ''))
  .then(urls => {
    Promise.all(urls.map(url => {
      return request
        .get(url)
        .then(res => res.body.name);
    }))
      .then(location => console.log(location));
  });
