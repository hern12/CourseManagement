const express = require('express')
  , router = express.Router()
const courseModel = require('../models/courseModel')


router.route('/getCategory').get((req, res) => {
    courseModel.getCategory().then((result) => {
      if(result.length === 0){
        res.status(200).json({status: 'fail', statusTxt: 'fail get category'})
      }else{
        res.status(200).json({result, status: 'success'})
      }
    })
})

router.route('/createCourse').post((req, res) => {
    const data = req.body
    courseModel.createCourse(data).then((result) => {
        if(result.length === 0){
            res.status(200).json({status: 'fail', statusTxt: 'fail get category'})
        }else{
            res.status(200).json({result, status: 'success'})
        }
    })
})

module.exports = router