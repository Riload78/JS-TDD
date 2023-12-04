/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
const getItem = (cards, position) => {
  if (typeof cards !== 'object') throw new Error('El primer parámetro debe ser un array')
  if (typeof position !== 'number') throw new Error('El segundo parámetro debe ser un entero')
  if (cards.length < position) throw new Error('La posición del item que deseas obtener está fuera del rango')
  if (!validateCards(cards)) throw new Error('Las cartas tienes que ser numeros')
  return cards[position]
}
/**
 *
 * @param {number[]} cards
 * @returns {boolean}
 */
const validateCards = (cards) => {
  for (const card of cards) {
    if (typeof card !== 'number') return false
  }
  return true
}

/**
 * Exchange card with replacementCard at the 0-based position
 * Perform some sleight of hand and exchange the card at index position with the replacement card provided.
 * Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
const setItem = (cards, position, replacementCard) => {
  if (typeof replacementCard !== 'number') throw new Error('replacementCard must be a number')
  if (cards.length < position) throw new Error('La posición del item que deseas obtener está fuera del rango')
  if (!validateCards(cards)) throw new Error('Las cartas tienes que ser numeros')
  cards[position] = replacementCard
  return cards
}

/**
 * Insert newCard at the end of the cards array
 * Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
const insertItemAtTop = (cards, newCard) => {
  if (typeof cards !== 'object') throw new Error('El primer parámetro debe ser un array')
  if (!validateCards(cards)) throw new Error('Las cartas tienes que ser numeros')
  if (typeof newCard !== 'number') throw Error('La cartas tienes que ser numeros')
  cards.push(newCard)
  return cards
}

/**
 * Remove the card at the 0-based position
 * Make a card disappear by removing the card at the given position from the stack.
 * Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
const removeItem = (cards, position) => {
  if (typeof cards !== 'object') throw new Error('El primer parámetro debe ser un array')
  if (!validateCards(cards)) throw new Error('Las cartas tienes que ser numeros')
  if (typeof position !== 'number') throw Error('La cartas tienes que ser numeros')
  cards.splice(position, 1)
  return cards
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
const removeItemFromTop = (cards) => {
  if (!validateCards(cards)) throw new Error('Las cartas tienes que ser numeros')
  cards.pop()
  return cards
}

module.exports = { getItem, validateCards, setItem, insertItemAtTop, removeItem, removeItemFromTop }
