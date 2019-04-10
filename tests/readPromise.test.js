const readPromise = require('../lib/readPromise');

describe('read promise', () => {
    it('reads a file', () => {
        return readPromise('./megan_2.md')
            .then(data => {
                expect(data).toEqual('Hello my name is Megan');
            });
    });
});
