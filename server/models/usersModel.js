const DB = require('../db')
const moment = require('moment')
const authenUser = async(uesrname, password) => {
    try{
        const result = await DB.get().request()
        .input('uesrname', uesrname)
        .input('password', password)
        .query('select Username, RoleID, FirstName, LastName, NickName, BirthDay, Gender from tblUsers where UserName = @uesrname and Password = @password')
        return result.recordset
    }catch (err) {
        return err
    }
}

const getUserProfile = async(token) => {
    const getToken = token.split(' ')
    try{
        const result = await DB.get().request()
        .input('username', getToken[1])
        .query('select FirstName, LastName, NickName, BirthDay, Gender from tblUsers where UserName = @username')
        return result.recordset
    }catch (err){
        return err
    }
}

const updateUserProfile = async(data) => {
    const getToken = data.token.split(' ')
    const updateData = data.data
    const birthDay = moment(updateData.BirthDay,'YYYY-MM-DD').format()
    try{
        const result = await DB.get().request()
        .input('username', getToken[1])
        .input('FirstName', updateData.FirstName)
        .input('LastName', updateData.LastName)
        .input('NickName', updateData.NickName)
        .input('BirthDay', birthDay)
        .input('Gender', updateData.Gender)
        .query('update tblUsers set FirstName = @FirstName, LastName = @LastName, NickName = @NickName, BirthDay = @BirthDay, Gender = @Gender where username = @username')
        return true
    }catch(err){
        return err
    }
}

module.exports = {
    authenUser,
    getUserProfile,
    updateUserProfile
}