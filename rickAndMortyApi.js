const request = require('superagent');

function getCharacter(src) {

  // return fsPromises.readFile(src, { encoding: 'utf8' })
  //  .then(data => {
  //    return Promise.all([
  //      Promise.resolve(data),
  //      fsPromises.readFile(src, { encoding: 'utf8' })
  //    ]);
  //  })
  //  .then(([promisePackageJson, promisePromisesMd]) => console.log(promisePackageJson, promisePromisesMd))
  //  .catch(err => {
  //    console.error(err);
  //  });

  //VERSION 1
  request 
    .get('https://rickandmortyapi.com/api/character/');
  Promise.resolve()
    .then(res => res.body.results)
    .then(characters => characters.map(character => character.origin.url))
  //origin.url is from the api's docs
    .then(characterLocationUrls => characterLocationUrls.filter(url => url !== ''))
    .then(characterLocationUrls => {
      return Promise.all(characterLocationUrls.map(url => {
        return request.get(url).then(res => {
          res.body;
          console.log(res.body);
        });
      }));
    });

  
  {
    Promise.resolve(src);
  }
}

// ]).get('https://rickandmortyapi.com/api/character/')
module.exports =  { getCharacter };
