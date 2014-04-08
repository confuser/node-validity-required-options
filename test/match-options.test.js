var matchOptions = require('../lib/match-options')
  , fixture = require('./fixture')

require('should')

describe('Required Options Validation', function() {
  it('should return true when the value matches the options', function () {
    matchOptions('world', fixture).should.equal(true)
  })

  it('should return false when the value does not matches the options', function () {
    matchOptions('worlds', fixture).should.equal(false)
  })

})
