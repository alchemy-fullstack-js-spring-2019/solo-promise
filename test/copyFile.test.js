const copy = require('../lib/copyFile');
const fsPromises = require('fs').promises;

describe('copy file test', ()=> {

    // afterEach(() => {
    //     return fsPromises.unlink('./writtenfileCOPY.txt');
    // });

    it('function read a file and copy it', () => {
        return copy('./writtenfile.txt', './writtenfileCOPY.txt')
            .then(()=> {
                return fsPromises.readFile('./writtenfileCOPY.txt', { encoding: 'utf8' });
            })
            .then(data => {
                expect(data).toEqual('I wrote this amazing file. so great!\n');
            });
    });
});
