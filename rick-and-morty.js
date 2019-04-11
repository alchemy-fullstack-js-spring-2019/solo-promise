const request = require('superagent');


///below is charcater origin code
request 
.get('https://rickandmortyapi.com/api/character/')
.then(res=>{ return res.body.results})
.then(characters => characters.map(characters => characters.origin.url))
.then(characterLocationUrls => characterLocationUrls.filter(url=> url !==""))
.then(characterLocationUrls => {
    return Promise.all(characterLocationUrls.map(url =>{
        return request.get(url).then(res => res.body);
    }));
})
.then(console.log);


