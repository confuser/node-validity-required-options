var matchOptions = require('./lib/match-options')

module.exports = function (validOptions, customMessage) {

  function validate(key, keyDisplayName, object, cb) {

    if (!matchOptions(object[key], validOptions)) {
      var message = customMessage || keyDisplayName + ' must be ' + validOptions.join(', ')

      return cb(null, message)
    }

    return cb(null, undefined)
  }

  return validate

}
