const DB = require('../db')
const moment = require('moment')

const getCategory = async() => {
    try{
        const result = await DB.get().request()
        .query('select * from tblCategory')
        return result.recordset
    }catch(err){
        return err
    }
}

const createCourse = async(course) => {
    const startDate = moment(course.startDate, 'YYYY-MM-DD, h:mm:ss a').format()
    console.log(startDate)
    const endDate = moment(course.endDate, 'YYYY-MM-DD, h:mm:ss a').format()
    try{
        const result = await DB.get().request()
        .input('CourseName', course.courseName)
        .input('CourseDescription', course.courseDescription)
        .input('CourseCategoryID', course.category)
        .input('CourseStartTime', new Date(startDate))
        .input('CourseEndTime', new Date(endDate))
        .input('numberOfStudent', course.numberOfStudent)
        .input('CreateDate', new Date())
        .input('UpdateDate', new Date())
        .query(`insert into tblCourseMaster (CourseName, CourseDescription, CourseCategoryID, CourseStartTime, CourseEndTime, numberOfStudent, CreateDate, UpdateDate) 
                values(@CourseName, @CourseDescription, @CourseCategoryID, @CourseStartTime, @CourseEndTime, @numberOfStudent, @CreateDate, @UpdateDate)`)
        return result
    }catch(err){
        return err
    }
}

module.exports = {
    getCategory,
    createCourse
}