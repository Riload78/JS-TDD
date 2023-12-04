/**
 * 3 Hoops Game
Background:

You are making a game that has 3 hoops. There is a red, blue and, green hoop.
Whenever you throw a ball into the hoops you get 100 points. and if you get three into a single hoop
in a row you get a bonus depending on the color of the hoop. The red hoop gives you 500 bonus points,
the blue hoop gives you 300 bonus points, and the green hoop gives you 200 bonus points.
Whenever you get a 3 in a row the hoop turns off until you get a 3 in a row inside of another hoop.

Challenge:

Your mission is to write a function prizeCounter that takes in an array of either R, G, B and output the score they would get.
Every time they make it into an active hoop they get 100 points.
If they were to make it into the same hoop 3 times in a row then they get a bonus based on the color of
the hoop. Red = 500   Blue = 300   Green = 200

Whenever you make it into a single hoop 3 times in a row, it then is deactivated and the other hoops are reactivated
if they were deactivated.
While deactivated, a hoop will give no points if you make it inside of it, but you will still break your streak.
Instructions:

The function prizeCounter will receive a basic array as its parameter.
Return the score recieved by the player.
The array will only contain the values ['R', 'G', 'B'].

 */
const prizeCounter = (arr) => {
  if (typeof arr !== 'object') throw new Error('Param must be a Array')
  if (!validateArr(arr)) throw new Error('Arr not permit')
  let score = 0
  let count = 0
  let lastColor = ''
  let deactivated = ''
  arr.forEach(function (item, index, arr) {
    if (deactivated === item) {
      return
    }
    lastColor = item
    if (item === lastColor) {
      if (count === 3) {
        score += getBonus(arr[index - 1])
        count = 0
        deactivated = arr[index - 1]
      } else {
        if (deactivated === item) {
          return
        }
        score += 100
      }
    }
    count++
  })
  return score
}

const validateArr = (arr) => {
  const allowArr = ['R', 'G', 'B']
  for (const item of arr) {
    if (!allowArr.includes(item)) {
      return false
    }
  }
  return true
}

const getBonus = (color) => {
  if (color === 'R') {
    return 500
  } else if (color === 'G') {
    return 200
  } else {
    return 300
  }
}
const arr = ['R', 'R', 'R', 'G', 'B', 'R', 'B', 'B', 'B', 'R']
prizeCounter(arr)
module.exports = { prizeCounter, validateArr, getBonus }
