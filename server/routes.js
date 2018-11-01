const router = require('express').Router()
const route = require('./controllers/index')

router.use('/', route)

module.exports = router

