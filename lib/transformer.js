const fsPromises = require('fs').promises;

const src = '../1_promises.md';

const transform = (src) => {
  fsPromises.readFile(src, 'utf8')
    .then(data => 
      console.log(data.toUpperCase())
    );
};

transform(src);

// * create and export a `transform(src)` function
// * use `fsPromises.readFile` to read a file
// * `then` remove all capital letters
// * `then` make all letters capital
// * `then` reverse the string
// * test
// * invoke your transform function
// * `then` expect that the result is what you think it should be
