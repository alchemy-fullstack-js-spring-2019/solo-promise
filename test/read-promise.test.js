const readPromise = require('../lib/read-promise');

describe('read promise', () => {
    it('reads a file', () => {
        return readPromise('./lib/dog.md')
            .then(data => {
                expect(data).toEqual('Woof woof! Bow wow!\n');
            });
    });
});
