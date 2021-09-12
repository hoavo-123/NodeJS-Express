'use strict'
const sql = require('mssql');

const { poolPromise } = require('../connectDB');
const userCommandText = require('./UserCommandText');

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            let list = await pool.request().query(userCommandText.GET_ALL_USERS);
            resolve(list.recordset)
        }
        catch (error) {
            reject(error)
        }
        sql.close();
    })
}

const getUserByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            let list = await pool.request()
                .input('id', sql.Int, id)
                .query(userCommandText.GET_USERS_BY_ID);

            resolve(list.recordset)
        }
        catch (error) {
            reject(error)
        }
        sql.close();
    })
}

const createuser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            let list = await pool.request()
                .input('FirstName', sql.VarChar, data.FirstName)
                .input('Password', sql.VarChar, data.Password)
                .input('LastName', sql.VarChar, data.LastName)
                .input('EmailAddress', sql.VarChar, data.EmailAddress)
                .input('Address', sql.VarChar, data.Address)
                .input('Gender', sql.VarChar, data.Gender)
                .input('RoleID', sql.Bit, data.RoleID)
                .input('PhoneNumber', sql.VarChar, data.PhoneNumber)
                .input('PositionID', sql.VarChar, data.PositionID)
                .input('Image', sql.VarChar, data.Image)
                .input('createdAt', sql.DateTime, '2021-08-23T04:57:22.103Z')
                .input('updatedAt', sql.DateTime, '2021-08-23T04:57:22.103Z')
                .query(userCommandText.POST_USER);
            resolve(list.recordset)
        }
        catch (error) {
            reject(error)
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            let list = await pool.request()
                .input('id', sql.Int, id)
                .input('FirstName', sql.VarChar, data.FirstName)
                .input('Password', sql.VarChar, data.Password)
                .input('LastName', sql.VarChar, data.LastName)
                .input('EmailAddress', sql.VarChar, data.EmailAddress)
                .input('Address', sql.VarChar, data.Address)
                .input('Gender', sql.VarChar, data.Gender)
                .input('RoleID', sql.Bit, data.RoleID)
                .input('PhoneNumber', sql.VarChar, data.PhoneNumber)
                .input('PositionID', sql.VarChar, data.PositionID)
                .input('Image', sql.VarChar, data.Image)
                .input('createdAt', sql.DateTime, '2021-08-23T04:57:22.103Z')
                .input('updatedAt', sql.DateTime, '2021-08-23T04:57:22.103Z')
                .query(userCommandText.UPDATE_USER);

            resolve(list.recordset)
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllUsers,
    getUserByID,
    createuser,
    updateUser
}
