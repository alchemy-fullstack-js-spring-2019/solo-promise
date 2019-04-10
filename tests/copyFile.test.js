const copyFile = require('../lib/copyFileFunction'
);
const fsPromises = require('fs').promises;

describe('copyFile function', () => {
    it('copies a file', () => {
        const oldFile = './1_promises.md';
        const newFile = './1_promises_3.md';
        const result = copyFile(oldFile, newFile);
        expect(fsPromises.readFile(result)).toEqual(fsPromises.readFile(oldFile));
    });
});
