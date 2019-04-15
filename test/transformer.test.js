const transformer = require('../lib/transformer');
const path = require('path');
// const fsPromises = require('fs').promises;

describe('transformer function', () => {
    it('transforms the string in the file', () => {
        return transformer(path.join(__dirname, '../lib/test-transform.txt' ))
            .then(data => {
                expect(data).toEqual('FDB');
            });
    });
});

