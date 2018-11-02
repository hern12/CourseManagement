
const Cors = require('cors')
const Express = require('express')
const BodyParser = require('body-parser')
const Routes = require('./routes')

// app setup
var app = Express()

// setting
app.set('port', 5000)

// use middleware
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())
app.use(Cors())


// use routes middleware
app.use(Routes)

module.exports = app