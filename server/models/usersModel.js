const DB = require('../db')

const authenUser = async(uesrname, password, done) => {
    const result = await DB.request()
    .input('uesrname', uesrname)
    .input('password', password)
    .query('select * from tblUsers where UserName = @uesrname and Password = @password')
    console.log(result)
    return done(result)
}

module.exports = {
    authenUser
}