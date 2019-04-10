const fsPromises = require('fs').promises;
const transform = require('../lib/transform');

describe('transform function', () => {
    it('removes all capital letters, changes all to capital, then reverses string', () => {
        const src = './megan_2.md';
        const result = transform(src);
        fsPromises.readFile(src, { encoding: 'utf8' })
            .then(data => {
                expect(data).toEqual('NAGE SI EMAN YM OLLE');
            });
    });
});
