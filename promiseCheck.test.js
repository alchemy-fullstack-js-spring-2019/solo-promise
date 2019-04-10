const request = require('superagent');
const promiseCheck = require('./promiseCheck');

describe('promise check', () => {
  test('returns true if promise returned', () => {
    let toCheck = request.get('https://rickandmortyapi.com/api/character/1');  
    return promiseCheck(toCheck)
      .then(res => {
        expect(res.then).toBeTruthy();
      });
  });
});
