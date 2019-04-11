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
