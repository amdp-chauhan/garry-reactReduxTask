'use strict'

const express = require('express');
const app = express();

app.use('/user', require('./user'));
app.use('/listings', require('./listings.route'));
app.use('/icons', require('./icons.route'));
app.use('/inquiries', require('./inquiries.route'));
app.use('/schedules', require('./tour_schedule.route'));

module.exports = app;
