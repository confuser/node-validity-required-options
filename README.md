# validity-required-options

[![Build Status](https://travis-ci.org/confuser/node-validity-required-options.png?branch=master)](https://travis-ci.org/confuser/node-validity-required-options)

Validity style validator which validates a field against a set of valid options

## Installation

    npm install validity-required-options

## Usage

Below  is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , createValidator = require('validity-required-options')

var schema = schemata(
    { state:
      { type: String
      , validators: { all: [ createValidator([ 'option1', 'option2' ]) ] }
      }
    })
```

## API

### var validate = createValidator()

Create a validate function.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for
schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
