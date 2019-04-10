const transformer = require('../lib/transformer');
// const fsPromises = require('fs').promises;

describe('transformer function', () => {
    it('transforms the string in the file', () => {
        return transformer('../lib/test-transform.txt')
            .then(data => {
                expect(data).toEqual('FDB');
            });
    });
});
