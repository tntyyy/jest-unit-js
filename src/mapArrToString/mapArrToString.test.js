const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('Correct value', () => {
    expect(mapArrToString([1, 2, 3])).toStrictEqual(['1', '2', '3']);
  })

  test('Various values', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'bar'])).toStrictEqual(['1', '2', '3']);
  })

  test('Empty array', () => {
    expect(mapArrToString([])).toStrictEqual([]);
  })
})