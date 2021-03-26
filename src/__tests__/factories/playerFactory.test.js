const playerFactory = require('../factories/playerFactory');

describe('Player Factory', () => {

  let player;
  let ai;
  beforeEach(() => {
    player = playerFactory();
    player.placePlayerShips();

    ai = playerFactory();
    player.placeAIShips();
  })

  it('default player has a ship on 0, 5, 10', () => {
    const board = player.gameboard.board
    expect(Object.keys(board).length).toBe(25);
    expect(board[0]).not.toBe(null);
    expect(board[5]).not.toBe(null);
    expect(board[10]).not.toBe(null);
  });

  it('placePlayerShips should place 2 ships on the board', () => {
    player.placePlayerShips();
    expect(player.gameboard.board[0]).not.toBe(null);
    expect(player.gameboard.board[5]).not.toBe(null);
    expect(player.gameboard.board[10]).not.toBe(null);

    expect(player.gameboard.board[21]).not.toBe(null);
    expect(player.gameboard.board[22]).not.toBe(null);
    expect(player.gameboard.board[23]).not.toBe(null);
  });

  it('placeAIShips should place 2 ships on the board', () => {
    ai.placeAIShips();
    expect(ai.gameboard.board[6]).not.toBe(null);
    expect(ai.gameboard.board[7]).not.toBe(null);
    expect(ai.gameboard.board[8]).not.toBe(null);

    expect(ai.gameboard.board[13]).not.toBe(null);
    expect(ai.gameboard.board[18]).not.toBe(null);
    expect(ai.gameboard.board[23]).not.toBe(null);
  })

})
