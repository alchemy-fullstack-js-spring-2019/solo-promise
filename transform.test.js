const transform = require('./transform');

describe('transform function', () => {
  it('reads a file and transforms it', () => {
    return transform('./demoFile.md');
  });
});
