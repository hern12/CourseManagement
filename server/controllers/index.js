const express = require('express')
  , router = express.Router()
var cors = require('cors')
router.use('/users', require('./users'))

router.get('/',cors({credentials: true, origin: 'http://localhost:8080'}) , (req, res) => {
    res.send('Hello')
})

module.exports = router