const readPromise = require('../lib/readPromise');

describe('read promise function', () => {
    it('creates a promise', () => {
        return readPromise('./somethingToCopy.txt')
            .then(data => {
                expect(data).toEqual('hi\n');
            })
    });
});
