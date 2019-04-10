const copyFile = require('../lib/copyFileFunction'
);

describe('copyFile function', () => {
    it('copies a file', () => {
        const oldFile = '../1_promises.md';
        const newFile = copyFile(oldFile);
        expect(oldFile).toEqual(newFile);
    }
})
