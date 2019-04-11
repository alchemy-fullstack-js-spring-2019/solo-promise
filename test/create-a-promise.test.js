const readFilePromise = require('../create-a-promise');

describe('see if read filePromise works', ()=>{
    it('give readFilePromise a src, see if proise works', ()=>{


        return readFilePromise('./test.txt')
            .then(data=>{
                expect(data).toBe('Hhi');
            })

    })
})