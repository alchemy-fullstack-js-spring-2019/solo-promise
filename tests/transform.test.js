const fsPromises = require('fs').promises;
const transform = require('../lib/transform');

describe('transform function', () => {
    it('removes all capital letters, changes all to capital, then reverses string', () => {
        return transform('../megan_2.md')
            .then(transformedData => {
                expect(transformedData).toEqual('NAGE SI EMAN YM OLLE');
            });
            console.log(transform())
    });
});
