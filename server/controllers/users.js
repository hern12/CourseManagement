const express = require('express')
  , router = express.Router()
const userModel = require('../models/usersModel')
router.route('/login').post((req,res) => {
    const data = req.body
    userModel.authenUser(data.username, data.password).then((user) => {
      if(user.length === 0){
        res.status(200).json({status: 'fail', statusTxt: 'username or password invalid'})
      }else{
        res.status(200).json({user,status: 'success'})
      }
    })
})

module.exports = router