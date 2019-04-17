const { getCharacter } = require('./rickAndMortyApi');

describe('rick and morty api', () => {
//   it('can get a character by Id', () => {
//     return getCharacter(1)
//       .then(res => {
//         expect(res).toHaveProperty({
//           name: 'Rick',
//         });
//       });
//   });
  it('exists', () => {
    expect(getCharacter);
  });
});
