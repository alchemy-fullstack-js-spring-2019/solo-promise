const request = require('superagent');

const url = 'https://rickandmortyapi.com/api/character/';


//my version
request
    .get(url)
    .then(res => {
        const results = res.body.results;
        const allOriginURLs = results.map(result => result.origin.url);
        const originURLs = allOriginURLs.filter(url => !!url);
        return originURLs;
    })
    .then(urls => {
        return Promise.all(urls.map(url => {
            return request
                .get(url)
                .then(result => result.body.name);
        }));
    })
    .then(console.log);
