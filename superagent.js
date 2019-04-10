const request = require('superagent');
// const fsPromises = require('fs').promises;

// var superA = new request();
// request.get('http://futuramaapi.herokuapp.com/api/quotes/3')
//   .then(res => res.body)
//   .then(result => console.log(result));

// request.get('futuramaapi.herokuapp.com/api/characters/Bender')
//   .then(res => res.body)
//   .then(result => console.log(result));

request.get('https://rickandmortyapi.com/api/character/')
  .then(response => response.body)
  .then(results => {
    return results.results.map(result => result.origin.url);
  })
  .then(urlArray => {
    return urlArray.filter(entry => entry !== '');})
  .then(allUrls => [...new Set(allUrls)]) //remove dulpicates
  .then(urls => {
    return Promise.all(
      urls.map((url) => {
        return request.get(url).then(res => res.body.name);
      })
    );
  })  
  .then(locations => console.log(locations));


