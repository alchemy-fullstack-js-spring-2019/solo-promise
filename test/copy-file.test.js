const copy = require('../copy-file');
const fsPromises = require('fs').promises;
const fs = require('fs');

describe('COPY-FILE-TEST',()=>
{
    afterEach(()=>{
        return fsPromises.unlink('./copy.txt');
    });
    
    it('given src and dst, copy a file to dst', ()=>
    {
        const src = './1_promises.md';
        const dst = './copy-file.test.txt';

        return copy(src, dst)
            .then(()=>
            {
                return fsPromises.readFile(dst, {encoding: 'utf8'});
            })
            .then(cloneData =>
            {
                console.log('cloneData', cloneData);
                fs.readFile(src, {encoding: 'utf8'},(data)=>
                {
                    return expect(cloneData).toBe(data);
                })        
            })
    })
})