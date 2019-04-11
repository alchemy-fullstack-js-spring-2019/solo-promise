const copy = require('../copy-file');
const fsPromises = require('fs').promises;
const fs = require('fs');

describe('COPY-FILE-TEST', () => {
    afterEach(() => {
        return fsPromises.unlink('./copy-file.test.txt');
    });

    it('given src and dst, copy a file to dst', () => {
        const src = './1_promises.md';
        const dst = './copy-file.test.txt';


        return copy(src, dst)
            .then(() => {
                return Promise.all([
                    fs.promises.readFile(src, { encoding: 'utf8' }),
                    fs.promises.readFile(dst, { encoding: 'utf8' })
                ]);
            })
            .then(([expected, result]) => {
                expect(expected).toBe(result)
            })
    })
})