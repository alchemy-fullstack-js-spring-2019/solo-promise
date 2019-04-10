
function promiseCheck(toCheck) {
  return toCheck
    .then(res => {
      console.log(res);
    });
}

module.exports = promiseCheck;

promiseCheck(request.get('https://rickandmortyapi.com/api/character/1'));
