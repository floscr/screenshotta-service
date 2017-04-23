// Set babel `env` and install `babel-register`
process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'main'

require('babel-register')({
  ignore: /node_modules/
})

// Require `main` process to boot app
require('./singleScreenshot.js')
