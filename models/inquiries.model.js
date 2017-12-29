const agents = require('./agent.model');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const InquirySchema = new mongoose.Schema({
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
  is_opened: {
    type: Boolean,
    require: true
  },
  agents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agents'
  }]
});

/**
 * Methods
 */
InquirySchema.method({
});

/**
 * Statics
 */
InquirySchema.statics = {
  /**
  * List all listings
  */
  list() {
    return this.find()
    .populate('agent')
    .exec();
  },
  /**
  * List all listings
  */
  show(id) {
    return this.findById(id)
    .populate('agent')
    .exec();
  }
}

module.exports = mongoose.model('property_inquiries', InquirySchema);
