
const Http = require('http')
const Api = require('./api')
const sqlServer = require('./db')

const server = Http.createServer(Api)

sqlServer.connect((err) => {
    if(!err){
        server.listen(5000, () => console.log(`Listening on port ${5000}`))
    }
})


