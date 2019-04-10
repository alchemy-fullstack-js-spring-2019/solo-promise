const fsPromises = require('fs').promises;

fsPromises.readFile('../1_promises.md', 'utf8')
  .then(fileToCopy =>
    fsPromises.writeFile('../copy.md', fileToCopy, 'utf8')
  );
