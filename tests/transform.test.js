const transformer = require('../lib/transform');

describe('transform function', () => {
    it('removes all capital letters, changes all to capital, then reverses string', () => {
        return transformer('./megan.txt')
            .then(transformedData => {
                expect(transformedData).toEqual('\nOLLE');
            });
    });
});
