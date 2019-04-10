const request = require('superagent');

request
  .get('http://futuramaapi.herokuapp.com/api/quotes/10')
  .then(response => {
    console.log(response.body.filter(character => {
      return character.character === 'Bender';
    }));
  });
