const gameFactory = require('../factories/gameFactory');

describe('Game', () => {
  let game;
  let PLAYER;
  let AI;
  beforeEach(() => {
    game = gameFactory();
    PLAYER = game.PLAYER;
    AI = game.AI;
  });

  it('creates a player and an AI', () => {
    expect(AI).not.toBe(null);
    expect(PLAYER).not.toBe(null);
  });

  it('default turn is PLAYER', () => {
    expect(game.TURN).toEqual(PLAYER);
  });

  it('startGame should populate ships on player and ai boards', () => {
    game.startGame();
    expect(PLAYER.gameboard.board[0]).not.toBe(null);
  })

  it('switchTurn function changes turn', () => {
    game.TURN = game.switchTurn();
    expect(game.TURN).toEqual(AI);
  });

  it('isGameOver returns true if all of one players ships has sunk' , () => {
    game.startGame();
    expect(game.isGameOver()).toBe(false);
    PLAYER.gameboard.receiveAttack(0);
    PLAYER.gameboard.receiveAttack(5);
    PLAYER.gameboard.receiveAttack(10);
    PLAYER.gameboard.receiveAttack(21);
    PLAYER.gameboard.receiveAttack(22);
    PLAYER.gameboard.receiveAttack(23);

    expect(game.isGameOver()).toBe(true);
  });
})
