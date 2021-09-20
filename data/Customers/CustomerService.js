'use strict'
const sql = require('mssql');

const { poolPromise } = require('../connectDB');
const CustomerCommandText = require('./CustomerCommandText');


const getAllCustomers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            let list = await pool.request().query(CustomerCommandText.GET_ALL_CUSTOMER);
            resolve(list.recordset)
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllCustomers
}