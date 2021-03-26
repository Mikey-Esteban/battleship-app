const shipFactory = (location) => {

  // ship attributes
  const length = location.length;
  const hasBeenHit = [];

  // ship methods
  const hit = (location) => {
    hasBeenHit.push(location)
  }

  const isSunk = () => {
    const anyLeft = location.filter(node => !hasBeenHit.includes(node))
    return (anyLeft.length === 0)
  }

  return { location, length, hasBeenHit, hit, isSunk }
}

module.exports = shipFactory
