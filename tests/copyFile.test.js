const copyFile = require('../lib/copyFileFunction'
);
const fsPromises = require('fs').promises;

describe('copyFile function', () => {
    afterEach(() => {
        return fsPromises.unlink('./1_promises_3.md');
    });
    it('copies a file', () => {
        return copyFile('./1_promises.md', './1_promises_3.md')
            .then(() => {
                return Promise.all([
                    fsPromises.readFile('./1_promises_3.md', { encoding: 'utf8' }),
                    fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
                ]);
            })
            .then(([expected, result]) => {
                expect(result).toEqual(expected);
            });
    });
});
