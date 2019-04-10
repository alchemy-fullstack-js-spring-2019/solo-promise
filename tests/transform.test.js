const fsPromises = require('fs').promises;
const transform = require('../lib/transform');

describe('transform function', () => {
    it('removes all capital letters, changes all to capital, then reverses string', () => {
        const src = './megan_2.md';
        const result = transform(src);
        expect(fsPromises.readFile(result)).toEqual('NAGEM SI EMAN YM OLLEH');
    });
});
