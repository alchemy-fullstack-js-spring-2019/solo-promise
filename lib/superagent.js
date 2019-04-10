const request = require('superagent');

//POST -create new thing
//GET- get a thing
//PUT- update a thing in its entirety replaces
//PATCH- also updates a thing, but partially
//DELETE- delete a thing

//can make a function by returning the request and making the character and #of quotes parameters

request
  .get('http://futuramaapi.herokuapp.com/api/characters/Bender/10')
  .then(response => response.body) //what exactly does the .body grab?
  .then(console.log);
  
