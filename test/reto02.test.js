/* eslint-disable no-undef */
import { manufacture } from '../reto02'

describe('TDD RETO 2', () => {
  test('Shoeld be a function', () => {
    expect(typeof manufacture).toBe('function')
  })
  test('throw error if First param is not arr type text', () => {
    expect(() => manufacture('not a array')).toThrow('First param must be an array')
  })
  test('throw error is second param is not a string', () => {
    expect(() => manufacture([1, 3], [])).toThrow('Second param must be a string')
  })
  test('manufacturer must return', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    expect(manufacture(gifts, materials)).toEqual(['tren', 'oso'])
  })
  test('manufacturer must return 2', () => {
    const gifts = ['juego', 'puzzle']
    const materials = 'jlepuz'
    expect(manufacture(gifts, materials)).toEqual(['puzzle'])
  })
  test('manufacturer must return', () => {
    const gifts = ['libro', 'ps5']
    const materials = 'psli'
    expect(manufacture(gifts, materials)).toEqual([])
  })
})
