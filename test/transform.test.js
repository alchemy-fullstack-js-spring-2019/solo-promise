const transformer = require('../transform');

describe('transformer function' , ()=>{
    it('reads a fileand transforms it', ()=>{
        return transformer('./test.txt')
        .then(transformedData =>{
            console.log('logging trans data', transformedData);
            expect(transformedData).toBe(`IH`);
        });
    });
});