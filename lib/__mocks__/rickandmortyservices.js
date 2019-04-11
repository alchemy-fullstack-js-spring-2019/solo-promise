const getCharacter = () => {
  return Promise.resolve({
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive'
  });
};

module.exports = getCharacter;
