const { getPossibilities } = require('./index.js')


 test('checar se possibilidade existe', () => {
    expect(getPossibilities('banana')).toBe(false);
  }); 