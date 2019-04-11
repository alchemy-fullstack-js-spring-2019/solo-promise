module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Ricky',
      species: 'Duck',
      status: 'Dead'
    });
  }
};
