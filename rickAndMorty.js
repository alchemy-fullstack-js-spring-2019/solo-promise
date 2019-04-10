const request = require('superagent');

function getOriginForCharacters(characters) {
    const dedupedUrl = [...new Set(characters
        .map(character => character.origin.url))]
    return Promise.all(
        dedupedUrl
            .filter(url => url !== '')
            .map(url => request.get(url).then(res => res.body))
    );
}

getOriginForCharacters();


request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        return res.body.results;
    })
    .then(body => {
        return body.map(character => character.origin.url).filter(url => url !== '');
    })
    .then(urls => {
        return Promise.all(urls.map( url => request.get(url).then(res => res.body.name)));
    })
    .then(data => {
        console.log(data);
    });
