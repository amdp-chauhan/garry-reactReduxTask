const  mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const UserSchema = new mongoose.Schema({
  fb_uid: {
    type: String,
    require: false
  },
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
});

/**
 * Methods
 */
UserSchema.method({
});

/**
 * Statics
 */
UserSchema.statics = {
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
  show(email) {
    return this.findOne({email:email})
      .exec();
  }
}

module.exports = mongoose.model('users', UserSchema);
