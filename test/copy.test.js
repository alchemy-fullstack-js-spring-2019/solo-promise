const copy = require('../lib/copy');
const fsPromises = require('fs').promises;
const fs = require('fs');

describe('copy function', () => {
    // afterEach(() => {
    //     return fsPromises.unlink('../lib/sample-copy.txt');
    // });
    it('copies a file and returns promise', () => {
        copy('../lib/sample-write.txt', '../lib/sample-copy.txt')
            .then(() => {
                expect(fs.existsSync('../lib/sample-copy.txt')).toBeTruthy();
            });
    });
});
