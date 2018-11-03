const express = require('express')
  , router = express.Router()
const userModel = require('../models/usersModel')

router.route('/login').post((req, res) => {
    const data = req.body
    userModel.authenUser(data.username, data.password).then((user) => {
      if(user.length === 0){
        res.status(200).json({status: 'fail', statusTxt: 'username or password invalid'})
      }else{
        res.status(200).json({user,status: 'success'})
      }
    })
})


router.route('/getUserProfile').post((req, res) => {
  const data = req.headers.authorization
  userModel.getUserProfile(data).then((userProfile) => {
    if(userProfile.length === 0){
      res.status(200).json({status: 'fail', statusTxt: 'please login'})
    }else{
      res.status(200).json({userProfile, status: 'success'})
    }
  })
})

router.route('/updateUserProfile').post((req, res) => {
  const token = req.headers.authorization
  const data = req.body
  const postDetail = {
    token,
    data
  }
  userModel.updateUserProfile(postDetail) 
  .then((status) => {
    if(status === true){
      res.status(200).json({
        status
      })
    }else{
      res.status(200).json({
        status
      })
    }
  })
})

module.exports = router