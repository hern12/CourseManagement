var sql = require('mssql')
var config = require('./config/dbConfig')

var connection

const connect = (done) => {
    connection = new sql.ConnectionPool(config.dbConfig)
    connection.connect((err) => {
        if (err) {
            console.log('Connect to sql server failed: ', err);
            return done(err);
        } else {
            console.log('Connect to sql server successful');
            return done();
        }
    })
}

const get = () => {
    return connection
}

module.exports = {
    connect,
    get
}