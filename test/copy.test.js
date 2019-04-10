const copy = require('../lib/copy');
const fsPromises = require('fs').promises;

describe('copy function', () => {
    it('copies a file from on src to a new one', () => {
        return copy('./somethingToCopy.txt', './jsonCopy.txt');
        const src = fsPromises.readFile('./somethingToCopy.txt', { encoding: 'utf8'});
        const dst = fsPromises.readFile('./jsonCopy.txt', { encoding: 'utf8' });
        expect(src).toEqual(dst);
    });
});
