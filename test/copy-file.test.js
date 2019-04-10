const copy = require('../lib/copy-file');

describe('copy a file using promises', () => {
    it('copies src file to dest', () => {
        copy('../promise-copy.md', 'test-promise-copy.md');
        //expect('./test-promise-copy.md').toBeAnExistingFile();
    });
});
