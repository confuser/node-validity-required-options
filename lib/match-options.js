module.exports = function (value, validOptions) {
  var valid = false

  validOptions.forEach(function (opt) {
    if (opt === value) valid = true
  })

  return valid
}
