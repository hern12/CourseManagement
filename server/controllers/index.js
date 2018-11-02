const express = require('express')
  , router = express.Router()
  
router.use('/users', require('./users'))

router.get('/' , (req, res) => {
    res.send('Hello')
})

module.exports = router