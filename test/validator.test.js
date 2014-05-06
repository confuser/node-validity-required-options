var validate = require('../validator')
  , fixture = require('./fixtures')
  , should = require('should')

describe('Required Options Validation', function() {
  it('should not pass back an error when the value matches the options', function () {
    var validator = validate(fixture.validOptions)

    validator('state', 'state', { state: 'hello' }, function (err, errMessage) {
      should.not.exist(err)
      should.not.exist(errMessage)
    })
  })

  it('should pass back an error when the value fails to match an option', function () {
    var validator = validate(fixture.validOptions)

    validator('state', 'state', { state: 'bye' }, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal('state must be hello, foo, bar, and, the, world')
    })
  })

  it('should pass back custom message when the value fails to match an option', function () {
    var customError = 'This is a custom error message'
      , validator = validate(fixture.validOptions, customError)

    validator('state', 'state', { state: 'bye' }, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal(customError)
    })
  })

  it('should pass back an error when an array value fails to match an option', function () {
    var validator = validate(fixture.values)

    validator('state', 'state', { state: [ 'bye' ] }, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

    })
  })

})
