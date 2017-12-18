'use strict'

const express = require('express');
const app = express();

app.use('/user', require('./user'));
app.use('/listings', require('./listings.route'));
app.use('/icons', require('./icons.route'));

module.exports = app;
