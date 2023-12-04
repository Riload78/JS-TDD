/* eslint-disable no-undef */
import { findFirstRepeated } from '../reto01'

describe('TDD Reto', () => {
  test('findFirstRepeated must be a function', () => {
    expect(typeof findFirstRepeated).toBe('function')
  })
  test('findFirstRepeated must be', () => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    expect(findFirstRepeated(giftIds)).toEqual(3)
  })
  test('findFirstRepeated must be -1', () => {
    const giftIds2 = [1, 2, 3, 4]
    expect(findFirstRepeated(giftIds2)).toEqual(-1)
  })
  test('findFirstRepeated must be 5', () => {
    const giftIds3 = [5, 1, 5, 1]
    expect(findFirstRepeated(giftIds3)).toEqual(5)
  })
  test('findFirstRepeated must be 2', () => {
    const giftIds3 = [2, 2]
    expect(findFirstRepeated(giftIds3)).toEqual(2)
  })
  test('findFirstRepeated must be 2', () => {
    const giftIds3 = [5, 1, 2, 3, 2, 5, 1]
    expect(findFirstRepeated(giftIds3)).toEqual(2)
  })
})
