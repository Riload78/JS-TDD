/* eslint-disable no-undef */
import { prizeCounter, validateArr, getBonus } from '../game'

describe('TDD prizeCounter', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })
  beforeEach(() => {
    console.log('beforeEach')
  })
  test('prizeCounter mus be a function', () => {
    expect(prizeCounter).toBeInstanceOf(Function)
  })
  test('prizeCounter throw error is param in not a arrray', () => {
    const arr = 2
    expect(() => prizeCounter(arr)).toThrow('Param must be a Array')
  })
  test('prizeCounter error if array content != R G B', () => {
    const arr = ['R', 'G', 'B', 'Y']
    expect(() => prizeCounter(arr)).toThrow('Arr not permit')
  })
  test('prizeCounter must be', () => {
    const arr = ['R', 'R', 'R', 'R']
    expect(prizeCounter(arr)).toEqual(800)
  })
  test('prizeCounter must be', () => {
    const arr = ['R', 'B', 'G', 'G', 'B', 'B', 'B', 'G', 'B']
    expect(prizeCounter(arr)).toEqual(1100)
  })
  test('Simple test to check on activation and deactivation', () => {
    const arr = ['R', 'R', 'R', 'G', 'B', 'R', 'B', 'B', 'B', 'R']
    expect(prizeCounter(arr)).toEqual(1700)
  })
  test('Testing AActivations', () => {
    const arr = ['G', 'G', 'G', 'B', 'B', 'B', 'G']
    expect(prizeCounter(arr)).toEqual(900)
  })
})

describe('TDD validateArr', () => {
  test('validateArr must be a function', () => {
    expect(validateArr).toBeInstanceOf(Function)
  })
  test('error if array content != R G B', () => {
    const arr = ['R', 'G', 'B', 'Y']
    expect(validateArr(arr)).toBe(false)
  })
  test('validateArr return true', () => {
    const arr = ['R', 'R', 'R', 'R']
    expect(validateArr(arr)).toBe(true)
  })
})

describe('TDD getBonua', () => {
  test('getBonus', () => {
    expect(getBonus).toBeInstanceOf(Function)
  })
  test('getBonus R', () => {
    expect(getBonus('R')).toBe(500)
    expect(getBonus('G')).toBe(200)
    expect(getBonus('B')).toBe(300)
  })
})
