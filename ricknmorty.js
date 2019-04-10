const request = require('superagent');

function getOriginForCharacters(characters) {
  const deDupedUrls = [...new Set(characters
    .map(character => character.origin.url))];
  return Promise.all(
    deDupedUrls
      .filter(url => url !== '')
      .map(url => request.get(url).then(res => res.body.name))
  );
}



request
  .get('https://rickandmortyapi.com/api/character')
  .then(res => res.body.results)
  .then(getOriginForCharacters)
  // .then(characters => characters.map(character => character.origin.url))
  // .then(characterLocationUrls => characterLocationUrls.filter(url => url !== ''))
  // .then(characterLocationUrls => {
  //   return Promise.all(characterLocationUrls.map(url => {
  //     return request.get(url).then(res => res.body);
  //   }));
  // })
  .then(console.log);

