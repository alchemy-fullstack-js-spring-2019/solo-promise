const request 

function getCharacter(id){
    return request
        .get('./url')
        .then(res=>{
            return {
                name: res.body.name,
                species: res.body.species,
                status: res.body.status
            }
        })
}

// use the following to clean code.  the parens makeit so that 
//block is not opened.  arrow implies return.
.then (res=>(
    {
        name: res.body.name,
        species: res.body.species,
        status: res.body.status
    }
))





///below is charcater origin code
request 
.get('https://rickandmortyapi.com/api/character/')
.then(res=>{res.body.results})
.then(characters => characters.map(characters => characters.origin.url))
.then(characterLocationUrls => characterLocationUrls.filter(url=> !==""))
.then(characterLocationUrls => {
    return Promise.all(characterLocationUrls.map(url =>{
        return request.get(url).then(res => res.body);
    }));
})
.then(console.log);


