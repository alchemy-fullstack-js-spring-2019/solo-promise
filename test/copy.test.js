const copy = require('../lib/copy');
const fs = require('fs');

describe('copy function', () => {
    it('copies a file and returns promise', () => {
        copy('../lib/sample-write.txt', '../lib/sample-copy.txt')
            .then(() => {
                expect(fs.existsSync('../lib/sample-copy.txt')).toBeTruthy();
            });
    });
});
