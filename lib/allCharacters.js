const request = require('superagent');

function getOriginForCharacters(characters) {
  const dedupedUrls = [...new Set(characters
    .map(character => character.origin.url))];
  return Promise.all(
    dedupedUrls
      .filter(url => url !== '')
      .map(url => request.get(url).then(res => res.body.name))
  );
}
request
  .get('https://rickandmortyapi.com/api/character/${id}')
  .then(res => res.body.results)
  .then(getOriginForCharacters)
  .then(console.log);


// request
//   .get('https://rickandmortyapi.com/api/character')
//   .then(res => res.body.results)
//   .then(characters => characters.map(character => character.origin.url))
//   .then(charactersLocationsUrls => charactersLocationsUrls.filter(url => url !== ''))
//   .then(characterLocationUrls => {
//     return Promise.all(characterLocationUrls.map(url => {
//       return request.get(url).then(res => res.body);
//     }));
//   })
// .then(console.log);
