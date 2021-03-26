const gameboardFactory = require('../factories/gameboardFactory');
const shipFactory = require('../factories/shipFactory');

describe('Gameboard Factory', () => {

  let gameboard;
  let board;
  beforeEach(() => {
    gameboard = gameboardFactory();
    board = gameboard.board;
  });

  it('default gameboard has 25 empty nodes', () => {
    expect(Object.keys(board).length).toBe(25);
    expect(board[0]).toBe(null);
  });

  it('gameboard can place ship on board', () => {
    let ship = shipFactory([0,1,2]);
    gameboard.placeShip(ship);
    expect(board[0]).toBe(ship);
    expect(board[1]).toBe(ship);
    expect(board[2]).toBe(ship);
  });

  it('records a list of missed shots', () => {
    expect(gameboard.missedShots).toEqual([]);
  });

  it('receives a hit on a ship and updates ships hasBeenHit', () => {
    let ship = shipFactory([0,1,2]);
    gameboard.placeShip(ship);
    gameboard.receiveAttack(0);
    expect(ship.hasBeenHit).toEqual([0]);
  });

  it('receives a missed attack and updates missedShots', () => {
    gameboard.receiveAttack(0);
    expect(gameboard.missedShots).toEqual([0]);
  });

  it('allShipsSunk function returns false if at least one ship has not been sunk', () => {
    let ship = shipFactory([0,1,2]);
    gameboard.placeShip(ship);
    gameboard.receiveAttack(0);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  it('allShipsSunk function returns true if there is no ship that has not been sunk', () => {
    let ship = shipFactory([0,1,2]);
    gameboard.placeShip(ship);
    gameboard.receiveAttack(0);
    expect(gameboard.allShipsSunk()).toBe(false);
    gameboard.receiveAttack(1);
    gameboard.receiveAttack(2);
    expect(gameboard.allShipsSunk()).toBe(true);
  })
})
