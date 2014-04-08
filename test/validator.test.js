var validate = require('../validator')
  , fixture = require('./fixture')
  , should = require('should')

describe('Required Options Validation', function() {
  it('should not pass back an error when the value matches the options', function () {
    var validator = validate(fixture)

    validator('state', 'state', { state: 'hello' }, function (err, errMessage) {
      should.not.exist(err)
      should.not.exist(errMessage)
    })
  })

  it('should pass back an error when the value fails to matche an option', function () {
    var validator = validate(fixture)

    validator('state', 'state', { state: 'bye' }, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal('state must be hello, foo, bar, and, the, world')
    })
  })

  it('should pass back custom message when the value fails to matche an option', function () {
    var customError = 'This is a custom error message'
      , validator = validate(fixture, customError)

    validator('state', 'state', { state: 'bye' }, function (err, errMessage) {
      should.not.exist(err)
      should.exist(errMessage)

      errMessage.should.equal(customError)
    })
  })

})
