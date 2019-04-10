const request = require('superagent');
request
  .get('https://rickandmortyapi.com/api/character/')
  .then(response => {
    console.log(response.body.results);
    return response.body.results.map(char => {
      return char.origin.url;
    });
  })
  .then(urlArray => {
    return urlArray.filter(url => url !== '');
  })
  .then(urlArray => {
    return Promise.all(urlArray.map(url => {
      return request.get(url).then(res => res.body.name);
    }));
  })
  .then(console.log);

