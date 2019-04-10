const copy = require('./copy');
const fsPromises = require('fs').promises;


describe('copy function', () =>{
    afterEach(() => {
        return fsPromises.unlink('../stuff.text');
    });

    it('can copy a file', () => {
return copy('./stuff.text', './somethiing.txt').then(() => {
    return fsPromises.readFile('./stuff.text', { encoding: 'utf8' }).then(result => {
        expect
    });
});
    });
});

