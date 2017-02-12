const babelRegister = require('babel-register')
const Mocha = require('mocha')
const glob = require('glob')
const mocha = new Mocha()

babelRegister({
  "presets": [
      "es2015",
      "react",
      "stage-0"
  ],
  "plugins": [
      "transform-decorators-legacy",
      "transform-class-properties"
  ]
})


glob('tests/**/*.spec.js', function (err, files) {
  var file, i, len
  if (err) {
    throw err
  }
  for (i = 0, len = files.length; i < len; i++) {
    file = files[i]
    mocha.addFile(file)
  }
  mocha.ui('bdd')
  return mocha.run(function (failures) {
    return process.exit(failures)
  })
})
