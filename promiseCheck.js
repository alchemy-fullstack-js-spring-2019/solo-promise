const request = require('superagent');

function promiseCheck(toCheck) {
  return toCheck instanceof Promise;
}

module.exports = promiseCheck;

promiseCheck(request.get('https://rickandmortyapi.com/api/character/1'));
