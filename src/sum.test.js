/* eslint-env jest */
const sum = require('./sum')

describe('sum()', () => {
  test('Given 1 and 2, should sums 3', () => {
    const given = '1,2'

    const expected = 3

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given 1,2 and 3 , should sums 6', () => {
    const given = '1,2,3'

    const expected = 6

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given empty string , should return 0', () => {
    const given = ''

    const expected = 0

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given new lines between number 1\n2,3 , should return 6', () => {
    const given = '1\n2,3'

    const expected = 6

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given negative number 1,4,-1 , should return negatives not allowed: -1', () => {
    const given = '1,4,-1'

    const expected = 'negatives not allowed: -1'

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given number bigger than 1000 2,1001 , should return 2', () => {
    const given = '2,1001'

    const expected = 2

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })

  test('Given delimiter //;\n1;2 , should return 3', () => {
    const given = '//;\n1;2'

    const expected = 3

    const actual = sum(given)

    expect(actual).toEqual(expected)
  })
})
