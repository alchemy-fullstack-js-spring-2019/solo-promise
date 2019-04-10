const copy = require('../lib/copy-file');
const fsPromises = require('fs').promises;

describe('copy a file using promises', () => {
    it('copies src file to dest', () => {
        return copy('./promise-copy.md', './yet-another-promise-copy.md')
            .then(() => {
                return fsPromises.readFile('./yet-another-promise-copy.md', 'utf8');
            })
            .then(result => {
                expect(result).toBeTruthy();
            });      
    });
});
