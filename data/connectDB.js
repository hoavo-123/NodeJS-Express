const config = require('../config');
const sql = require('mssql');

const poolPromise = new sql.ConnectionPool(config.sql)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql, poolPromise
}