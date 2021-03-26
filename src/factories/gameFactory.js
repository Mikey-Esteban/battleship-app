const playerFactory = require('./playerFactory');

const gameFactory = () => {

  // game attributes
  const PLAYER = playerFactory();
  const AI = playerFactory();
  let TURN = PLAYER;

  // game methods
  const switchTurn = () => {
    return TURN === PLAYER ? TURN = AI : TURN = PLAYER ;
  }

  const startGame = () => {
    PLAYER.placePlayerShips();
    AI.placeAIShips();
  }

  const isGameOver = () => {
    if (PLAYER.gameboard.allShipsSunk() === true) {
      return true
    } else if (AI.gameboard.allShipsSunk() === true) {
      return true
    } else {
      return false
    }
  }

  return { PLAYER, AI, TURN, switchTurn, startGame, isGameOver }
}

module.exports = gameFactory
