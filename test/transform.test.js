const transform = require('../lib/transform');

describe('transform function test', () => {
    it('transform function will transform contents of a file', () => {
        return transform('./moretext.txt')
            .then(data => {
                expect(data).toEqual('\n!TAERG OS .ELIF GNIZAMA SIHT ETORW ');
            });
    });
});
