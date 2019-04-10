const request = require('superagent');

request
  .get()
  .then(res => {
    res.body;
  });
