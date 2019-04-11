const request = require('superagent');



    Promise.all([
    request
    .get('https://rickandmortyapi.com/api/character/'),
   // request
   // .get('https://rickandmortyapi.com/api/character/')
    ])
    .then(([characters, origin]) => {
        const all = characters.body.results;
        console.log('callrt3t5i4rqwuytirq48y5t4ru89yeriof', all);
        //console.log('character', origin.body);
    })