const copy = require('../lib/copy-file');
const fsPromises = require('fs').promises;

describe('copy a file using promises', () => {
    it('copies src file to dest', () => {
        return copy('./lib/dog.md', './dog-copy.md')
            .then(() => {
                return Promise.all([
                    fsPromises.readFile('./lib/dog.md', 'utf8'),
                    fsPromises.readFile('./dog-copy.md', 'utf8')
                ]);
            })
            .then(([expected, result]) => {
                expect(expected).toEqual(result);
            });      
    });
});
