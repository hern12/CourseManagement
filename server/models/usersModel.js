const DB = require('../db')
const authenUser = async(uesrname, password) => {
    try{
        const result = await DB.get().request()
        .input('uesrname', uesrname)
        .input('password', password)
        .query('select Username, RoleID from tblUsers where UserName = @uesrname and Password = @password')
        return result.recordset
    }catch (err) {
        return err
    }
}

module.exports = {
    authenUser
}