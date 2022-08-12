const delay = require('./delay');

describe('mapArrToString', () => {
  test('Correct value', async () => {
    const sum = await delay(() => 5 + 5, 1500)
    expect(sum).toBe(10);
  })
})