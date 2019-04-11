const request = require('superagent');

request
    .get('https://rickandmortyapi.com/api/character/')
    .then(results => {
        return Promise.all(results.body.results.filter(char => char.origin.url ! =='').map(char => {
            return request  
                .get(char.origin.url)
                .then(res => res.body.name);
        })
        );
    })
    .then(console.log); 


    function getCharacterOrigin(characters) {
        const dedupedUrls = [...new Set(characters
            .map(character => character.origin.url))];
        return Promise.all(
            dedupedUrls
                .filter(url => url !== '')
                .map(url => request.get(url).then(res => res.body.name))
        );
    }
    