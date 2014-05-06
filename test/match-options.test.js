var matchOptions = require('../lib/match-options')
  , fixture = require('./fixtures')

require('should')

describe('Required Options Validation', function() {
  it('should return true when the value matches the options', function () {
    matchOptions('world', fixture.validOptions).should.equal(true)
  })

  it('should return false when the value does not matches the options', function () {
    matchOptions('worlds', fixture.validOptions).should.equal(false)
  })

  it('should return false when a value within an array does not match the valid options', function () {
    matchOptions([ 'small', 'world' ], fixture.values).should.equal(false)
  })

  it('should return true when a value within an array does not match the valid options', function () {
    matchOptions([ 'world', 'world', 'big' ], fixture.values).should.equal(true)
  })

})
