const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const ScheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  }
});

/**
 * Methods
 */
ScheduleSchema.method({
});

/**
 * Statics
 */
ScheduleSchema.statics = {
  /**
  * List all listings
  */
  list() {
    return this.find()
    .exec();
  },
  /**
  * List all listings
  */
  show(id) {
    return this.findById(id)
    .exec();
  }
}

module.exports = mongoose.model('tour_schedules', ScheduleSchema);
