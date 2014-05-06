module.exports = function (value, validOptions) {

  var valid = true

  if (Array.isArray(value)) {
    value.forEach(function (val) {
      if (!valid) return

      if (validOptions.indexOf(val) === -1) {
        valid = false
      }
    })

    return valid
  } else {
    return validOptions.indexOf(value) !== -1
  }

}
