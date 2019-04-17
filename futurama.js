const request = require('superagent');

request 
  .get('http://futuramaapi.herokuapp.com/api/quotes/6')
  .then(res => {
    res.body;
    console.log('gets 6 quotes', res.body);
  });

const dog = {
  name: 'spot',
  age: 2
};
console.log(dog);

request
  .get('http://futuramaapi.herokuapp.com/api/characters/bender/5')
  .then(res => {
    res.body;
    console.log('gets 5 Bender objects', res.body);
  });

function getPromiseAll() {

  return Promise.all([
    request
      .get('http://futuramaapi.herokuapp.com/api/characters/bender')
      .then(res => {
        res.body;
        console.log('lists all Bender objects', res.body);
      }),
  ]);
}

console.log('getPromiseAll:', getPromiseAll());
