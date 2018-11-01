var dbConfig = {
    driver: "msnodesqlv8",
    user:  "hern12",
    password: "123123",
    server: "localhost",
    database:"CourseManagement",
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        trustedConnection: true,
        useUTC: true
    }
};

module.exports = {
    dbConfig
}
