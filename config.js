'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASS, SQL_DATABASE, SQL_SERVER, SQL_DATABASE_TEST } = process.env;

const sqlEncrypt = process.env.ENCRYPT === 'true';

assert(PORT, 'PORT IS REQUIRED');
assert(HOST, 'HOST IS REQUIRED');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        user: SQL_USER,
        password: SQL_PASS,
        database: process.env.NODE_ENV === 'test' ? SQL_DATABASE_TEST : SQL_DATABASE,
        server: SQL_SERVER,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: sqlEncrypt,
            trustServerCertificate: false
        }
    }
}