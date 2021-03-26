const gameboardFactory = () => {

  // gameboard attributes
  const board = {
    0: null, 1: null, 2: null, 3: null, 4: null,
    5: null, 6: null, 7: null, 8: null, 9: null,
    10: null, 11: null, 12: null, 13: null, 14: null,
    15: null, 16: null, 17: null, 18: null, 19: null,
    20: null, 21: null, 22: null, 23: null, 24: null
  }

  const missedShots = [];

  // gameboard methods
  const placeShip = (ship) => {
    ship.location.map(node => board[node] = ship)
  }

  const receiveAttack = (location) => {
    if (board[location] !== null ) {
      const ship = board[location];
      ship.hit(location);
    } else {
      missedShots.push(location);
    }
  }

  const allShipsSunk = () => {
    for (const prop in board) {
      if(board[prop] !== null) {
        const ship = board[prop];
        if (ship.isSunk() === false) {
          return false
        }
      }
    }
    return true
  }


  return { board, missedShots, placeShip, receiveAttack, allShipsSunk }
}

module.exports = gameboardFactory
