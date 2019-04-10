const transform = require('../lib/transform');

describe('transform file text', () => {
    it('transforms the contents of a file', () => {
        return transform('./lib/dog.md')
            .then(result => {
                console.log('result', result);
                expect(result).toEqual('\n!WOW WO !FOOW FOO');
            });
    });
});
