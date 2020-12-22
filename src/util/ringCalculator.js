const RingCalculator = function (numberOfRings, maxRadius) {
  // this is where you change the width of the rings
  var sequence = [0, 6, 5, 3, 2, 2, 1]

  var self = {}

  self.sum = function (length) {
    return sequence.slice(0, length + 1).reduce(function (previous, current) {
      return previous + current
    }, 0)
  }

  self.getRadius = function (ring) {
    var total = self.sum(numberOfRings)
    var sum = self.sum(ring)

    return maxRadius * sum / total
  }

  return self
}

module.exports = RingCalculator
