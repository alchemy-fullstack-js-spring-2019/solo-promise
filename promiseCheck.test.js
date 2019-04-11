const request = require('superagent');
const promiseCheck = require('./promiseCheck');

describe('promise check', () => {
  test('returns true if promise returned', () => {
    let toCheck = request.get('https://rickandmortyapi.com/api/character/1');  
    const result = promiseCheck(toCheck);
    expect(result).toBeTruthy;
  });

  test('returns false if no promise returned', () => {
    let toCheck = '12345';  
    const result = promiseCheck(toCheck);
    expect(result).toBeFalsy;
  });
});
