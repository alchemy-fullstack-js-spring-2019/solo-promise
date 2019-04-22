const request = require('superagent');

function getOrigin(characters) {
    const dedupedURLS - [...new Set(characters
        .map(character => character.origin.url))];
  return Promise.all(
    characters
      .map(character => character.origin.url)
      .filter(url => url !== '')
      .map(url => request.get(url).then(res => res.body.name))
  );
}

//remove duplicates
// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => res.body.results)
//   .then(characters => {
//     characters.map(character => character.origin.url);
//   })
//   .then(characterLocationURLs => characterLocationURLs.filter(url => url !== ''))
//   .then(characterLocationURLs => {
//     return Promise.all(characterLocationURLs.map(url => {
//       return request.get(url).then(res => res.body);
//     }));
//   })
//   .then(console.log);


