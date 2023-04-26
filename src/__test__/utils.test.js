const { add } = require('../utils/utils')

describe('test services', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3)
  })
})
