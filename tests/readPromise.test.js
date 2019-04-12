const readPromise = require('../lib/readPromise');

describe('read promise', () => {
    it('reads a file', () => {
        return readPromise('./megan.txt')
            .then(data => {
                expect(data).toEqual('Hello\n');
            });
    });
});
