const readFilePromise = require('../create-a-promise');

describe('see if read filePromise works', ()=>{
    it('give readFilePromise a src, see if proise works', ()=>{


        return readFilePromise('../copy-file.test.txt')
            .then(data=>{
                expect(data).toEqual('hi\n');
            })

    })
})