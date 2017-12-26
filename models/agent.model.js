const  mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const AgentSchema = new mongoose.Schema({
  icon: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  }
});

/**
 * Methods
 */
AgentSchema.method({
});

/**
 * Statics
 */
AgentSchema.statics = {
  /**
  * List all listings
  */
  list() {
    return this.find()
    .exec();
  }
}

module.exports = mongoose.model('agents', AgentSchema);
