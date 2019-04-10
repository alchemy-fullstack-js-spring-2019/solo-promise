const transform = require('../lib/transform');

describe('transform function', () => {
    it('mutates text of src', () => {
        const src = './somethingToCopy.txt';
        return transform(src)
            .then(data => {
                console.log(data);
                expect(data).toEqual('IH');
            });
    });
});
