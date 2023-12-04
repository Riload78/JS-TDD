/* eslint-disable no-undef */
import { getItem, validateCards, setItem, insertItemAtTop, removeItem } from '../index.js'

describe('TDD Cards - getItem', () => {
  beforeAll(() => {
    console.log('Antes de cada prueba se ejecuta esto')
  })
  beforeEach(() => {
    console.log('Antes de cada iteración de los tests se ejecuta esto')
  })
  test('getItem should be a function', () => {
    expect(typeof getItem).toBe('function')
  })
  test('getItem throw error if first param not array', () => {
    expect(() => getItem('no soy un array', 2)).toThrow('El primer parámetro debe ser un array')
  })
  test('getItem throw error if second param not number', () => {
    const cards = [1, 2, 3]
    expect(() => getItem(cards, 'adhsa')).toThrow('')
  })
  test('getItem throw error if position is greater than cards.lenght', () => {
    const cards = [1, 2, 3]
    expect(() => getItem(cards, 4)).toThrow('La posición del item que deseas obtener está fuera del rango')
  })
  test('getItem thrown error when cars contain string', () => {
    const cards = [1, 'C', 3]
    expect(() => getItem(cards, 2)).toThrow('Las cartas tienes que ser numeros')
  })
  test('getItem should be', () => {
    const cards = [1, 2, 3]
    expect(getItem(cards, 2)).toBe(3)
  })
})

describe('TDD Cards - validateCars', () => {
  test('cards array be number', () => {
    const cards = [1, 2, 3]
    expect(validateCards(cards)).toBe(true)
  })
  test('cards array can not contain string', () => {
    const cards = [1, 'C', 3]
    expect(validateCards(cards)).toBe(false)
  })
})

describe('TDD Cards - setItem', () => {
  test('setItem should be a function', () => {
    expect(typeof setItem).toBe('function')
  })
  test('setItem thrown error when cars contain string', () => {
    const cards = [1, 'C', 3]
    expect(() => setItem(cards, 2, 5)).toThrow('Las cartas tienes que ser numeros')
  })
  test('setItem throw error if second param not number', () => {
    const cards = [1, 2, 3]
    expect(() => setItem(cards, 'adhsa')).toThrow('')
  })
  test('setItem throw error if position is greater than cards.lenght', () => {
    const cards = [1, 2, 3]
    expect(() => setItem(cards, 4, 3)).toThrow('La posición del item que deseas obtener está fuera del rango')
  })
  test('setItem throw error if param 3 not a number', () => {
    const cards = [1, 2, 3]
    const replacementCard = 'a'
    expect(() => setItem(cards, 2, replacementCard)).toThrow('replacementCard must be a number')
  })
  test('setItem should be', () => {
    const cards = [1, 2, 3]
    const replacementCard = 5
    expect(setItem(cards, 2, replacementCard)).toEqual([1, 2, 5])
  })
})

describe('TDD Cards - insertItemAtTop', () => {
  test('insertItemAtTop should be a function', () => {
    expect(typeof insertItemAtTop).toBe('function')
  })
  test('insertItemAtTop throw erro if secon param not a number', () => {
    const cards = [1, 2, 3]
    expect(() => insertItemAtTop(cards, 's')).toThrow('La cartas tienes que ser numeros')
  })
  test('insertItemAtTop must return', () => {
    const cards = [1, 2, 3]
    const newCard = 5
    expect(insertItemAtTop(cards, newCard)).toEqual([1, 2, 3, 5])
    expect(insertItemAtTop(cards, 6)).toEqual([1, 2, 3, 5, 6])
  })
})

describe('TDD Card - removeItem', () => {
  test('removeItem must be a function', () => {
    expect(typeof removeItem).toBe('function')
  })
  test('removeItem must return', () => {
    const cards = [1, 2, 3]

    expect(removeItem(cards, 1)).toEqual([1, 3])
  })
})
