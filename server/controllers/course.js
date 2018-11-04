const express = require('express')
  , router = express.Router()
const courseModel = require('../models/courseModel')

router.route('/getCourse').get((req, res) => {
    courseModel.getCourse().then((result) => {
        if(result.length === 0){
          res.status(200).json({status: 'success', statusTxt: 'No data'})
        }else{
          res.status(200).json({result, status: 'success'})
        }
      })
})  

router.route('/getCategory').get((req, res) => {
    courseModel.getCategory().then((result) => {
      if(result.length === 0){
        res.status(200).json({status: 'success', statusTxt: 'No data'})
      }else{
        res.status(200).json({result, status: 'success'})
      }
    })
})

router.route('/createCourse').post((req, res) => {
    const data = req.body
    courseModel.createCourse(data).then((result) => {
        if(result.length === 0){
            res.status(200).json({status: 'success', statusTxt: 'No data'})
        }else{
            res.status(200).json({result, status: 'success'})
        }
    })
})

router.route('/searchCourse').get((req, res) => {
    const criteria = req.query
    courseModel.getCourseByFilter(criteria).then( result => {
        if(result.length === 0){
            res.status(200).json({status: 'success', statusTxt: 'No data'})
        }else{
            res.status(200).json({result, status: 'success'})
        }
    })
})

module.exports = router