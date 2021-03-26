const gameboardFactory = require('../factories/gameboardFactory');
const shipFactory = require('../factories/shipFactory');

const playerFactory = () => {

  // initialize gameboard
  const gameboard = gameboardFactory();

  // methods to place default ships
  const placePlayerShips = () => {
    gameboard.placeShip(shipFactory([0,5,10]));
    gameboard.placeShip(shipFactory([21,22,23]));
  }

  const placeAIShips = () => {
    gameboard.placeShip(shipFactory([6,7,8]));
    gameboard.placeShip(shipFactory([13,18,23]));
  }

  return { gameboard, placePlayerShips, placeAIShips }
}

module.exports = playerFactory
