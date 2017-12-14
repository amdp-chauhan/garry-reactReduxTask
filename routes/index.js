'use strict'

const express = require('express');
const app = express();

app.use('/user', require('./user'));
app.use('/listings', require('./listings.route'));

module.exports = app;
