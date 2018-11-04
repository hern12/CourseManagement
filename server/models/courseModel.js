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

const getCourse = async() => {
    try{
        const course = await DB.get().request()
        .query(`select tc.CourseName, tc.CourseDescription, tl.FirstName + ' ' + tl.LastName as FullName, tc.CourseStartTime, tc.CourseEndTime, tc.NumberOfStudent from tblCourseMaster tc
                left outer join tblUsers tl on tc.UserID = tl.UserID`)
        if(course.recordset){
            return course.recordset
        }else{
            return false
        }
    }catch(err){
        return err
    }
}

const getCourseByFilter = async(criteria) => {
    try {
        console.log('model criteria ', criteria)
        const defaultStartDate = criteria.startDate ? criteria.startDate : '2000-01-01'
        const defaultEndDate = criteria.endDate ? criteria.endDate : '3000-01-01'
        console.log(defaultStartDate, defaultEndDate)
        const course = await DB.get().request()
        .input('startDate', defaultStartDate)
        .input('endDate', defaultEndDate)
        .query(`select tc.CourseName, tc.CourseDescription, tl.FirstName + ' ' + tl.LastName as FullName, tc.CourseStartTime, tc.CourseEndTime, tc.NumberOfStudent from tblCourseMaster tc
                left outer join tblUsers tl on tc.UserID = tl.UserID
                where tc.CourseName like '%${criteria.courseName}' and ((tc.CourseStartTime BETWEEN  @startDate AND @endDate) OR (tc.CourseEndTime Between @startDate AND @endDate)
                OR (tc.CourseStartTime <= @startDate AND tc.CourseEndTime >= @endDate))`)
        if(course.recordset){
            return course.recordset
        }else{
            return false
        }
    }catch(err) {
        console.log('err is', err)
        return err
    }
}

const createCourse = async(course) => {
    const startDate = moment(course.courseObj.startDate, 'YYYY-MM-DD, h:mm:ss a').format()
    const endDate = moment(course.courseObj.endDate, 'YYYY-MM-DD, h:mm:ss a').format()
    try{
        //get user id before insert 
        const getUserID = await DB.get().request()
        .input('userName', course.creator)
        .query('select * from tblUsers where UserName = @userName') 

        //insert course 
        const insertCourse = await DB.get().request()
        .input('CourseName', course.courseObj.courseName)
        .input('CourseDescription', course.courseObj.courseDescription)
        .input('CourseCategoryID', course.courseObj.category)
        .input('CourseStartTime', new Date(startDate))
        .input('CourseEndTime', new Date(endDate))
        .input('numberOfStudent', course.courseObj.numberOfStudent)
        .input('UserID', getUserID.recordset[0].UserID)
        .input('CreateDate', new Date())
        .input('UpdateDate', new Date())
        .input('Operator', course.creator) 
        .query(`insert into tblCourseMaster (CourseName, CourseDescription, CourseCategoryID, CourseStartTime, CourseEndTime, numberOfStudent, UserID, CreateDate, UpdateDate, Operator) 
                values(@CourseName, @CourseDescription, @CourseCategoryID, @CourseStartTime, @CourseEndTime, @numberOfStudent, @UserID, @CreateDate, @UpdateDate, @Operator)`)

        //get lates coures
        const getLastesInsert = await DB.get().request()
        .query('select top 1 * from tblCourseMaster order by CourseID desc')

        //insert subject by lates course id
        const courseId = getLastesInsert.recordset[0].CourseID
        const subjectQuery = 'insert into tblSubject (SubjectName, CourseID, CreateDate, UpdateDate, Operator) '
        let value = `values`
        const date = moment(new Date()).format('YYYY-MM-DD')
        const { courseObj } = course
        for(let i = 0; i < courseObj.subject.length; i++){
            if(i === courseObj.subject.length - 1){
                value += `('${courseObj.subject[i].subjectName}', '${courseId}', ${date}, ${date}, '${course.creator}')`
            }else{  
                value += `('${courseObj.subject[i].subjectName}', '${courseId}', ${date}, ${date}, '${course.creator}'),`
            }
        }
        queryString = subjectQuery.concat(value)
        await DB.get().request()
        .query(queryString)
        return true
    }catch(err){
        return err
    }
}

module.exports = {
    getCategory,
    createCourse,
    getCourse,
    getCourseByFilter
}