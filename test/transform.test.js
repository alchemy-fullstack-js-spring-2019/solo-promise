describe('transformer function' , ()=>{
    it('reads a fileand transforms it', ()=>{
        return transformer('./test.txt')
        .then(transformedData =>{
            expect(transformedData).toEqual('\nIH');
        });
    });
});