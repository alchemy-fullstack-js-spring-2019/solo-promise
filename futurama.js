const request = require('superagent');

//POST - create a new thing
//GET - get a thing
//PUT - update a thing in its entirety
//PATCH - partially update a thing
//DELETE - delete a thing


request
    .get('http://futuramaapi.herokuapp.com/api/characters/Fry/4')
    .then(res => {
        return res.body;
    })
    .then(console.log);
