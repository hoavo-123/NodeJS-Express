'use strict'

const express = require('express');
const config = require('./config');
const bodyparser = require('body-parser');
const cors = require('cors');
const eventrouter = require('./routes/eventroute');
const db = require('./data/connectDB');

const app = express();


app.use(cors());
app.use(bodyparser.json());
app.use('/api', eventrouter.routes)

module.exports = app;
