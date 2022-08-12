const validateValue = require('./validateValue');



describe('validateValues', () => {
  test('Valid value', () => {
    expect(validateValue(50)).toBe(true);
  })

  test('Less than the correct value', () => {
    expect(validateValue(-20)).toBe(false);
  })

  test('More than the correct value', () => {
    expect(validateValue(120)).toBe(false);
  })

  test('Lower bound value', () => {
    expect(validateValue(0)).toBe(true);
  })

  test('Higher boundary value', () => {
    expect(validateValue(100)).toBe(true);
  })
})