const request = require('superagent');
//post - create a new thing
//get - get a thing
//put - update a thing in its entirety
//patch - update thing
//delete - delete a thing
request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body)
    .then(console.log);



