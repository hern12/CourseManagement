const express = require('express')
  , router = express.Router()
const userModel = require('../models/usersModel')
router.route('/login').post((req,res) => {
    const data = req.body
    userModel.authenUser(data.username, data.password, (user) => {
      console.log('login success')
      res.send('Login')
    })
})

module.exports = router