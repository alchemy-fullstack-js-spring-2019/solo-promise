describe('transformer function' , ()=>{
    it('reads a fileand transforms it', ()=>{
        return transformer('./test.txt')
        .then(transformerData =>{
            expect(transformedData).toEqual('\nIH');
        });
    });
});