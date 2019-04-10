const request = require('superagent');

function promiseCheck(toCheck) {
  if(typeof toCheck === 'object'){
    return true;
  }
  else {return false;}
}

module.exports = promiseCheck;

promiseCheck(request.get('https://rickandmortyapi.com/api/character/1'));
