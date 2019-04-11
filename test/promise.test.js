const readFilePromise = require('../lib/promise');

describe('read promise', ()=> {
    it('reads a file', ()=> {
        return readFilePromise('./moretext.txt')
            .then(data => {
                expect(data).toEqual('I wrote this amazing file. so great!\n');
            });
    });
});
