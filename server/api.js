
const Cors = require('cors')
const Express = require('express')
const BodyParser = require('body-parser')
const Routes = require('./routes')

// app setup
var app = Express()

// setting
app.set('port', 3010)

// use middleware
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())
app.use(function (req, res, next) {

    console.log(req)
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

  

// use routes middleware
app.use(Routes)

module.exports = app