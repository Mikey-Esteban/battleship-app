const shipFactory = require('../factories/shipFactory');

describe('Ship Factory', () => {

  let ship;
  beforeEach(() => {
    ship = shipFactory([0,1,2])
  });

  it('default ship has a length of 3', () => {
    expect(ship.length).toBe(3)
  })

  it('returns an array of positions that have been hit', () => {
    expect(ship.hasBeenHit).toEqual([])
  })

  it('hit function adds a position to the hasBeenHit array', () => {
    ship.hit(1);
    expect(ship.hasBeenHit).toEqual([1]);
  })

  it('isSunk function returns true or false depending on every location of ship being hit', () => {
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  })
})
