const listing_header_images = require('./listing_header_images');
const icons = require('./icons.model');
const agents = require('./agent.model');
const  mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  meta: {
    type: [],
    require: false
  },
  nearbyHomes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'listings'
  }],
  headerImages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'listing_header_images'
  }],
  features: [{
    icon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'icons',
      require: true
    },
    name: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  }],
  facts: [{
    icon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'icons',
      require: true
    },
    type: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  }],
  agents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agents'
  }]
});

/**
 * Methods
 */
ListingSchema.method({
});

/**
 * Statics
 */
ListingSchema.statics = {
  /**
  * List all listings
  */
  list() {
    return this.find()
    .populate('nearbyHomes')
    .populate('headerImages')
    .populate('features.icon')
    .populate('facts.icon')
    .populate('agents')
    .exec();
  },
  /**
  * List all listings
  */
  show(id) {
    return this.findById(id)
    .populate('nearbyHomes')
    .populate('headerImages')
    .populate('features.icon')
    .populate('facts.icon')
    .populate('agents')
    .exec();
  }
}

module.exports = mongoose.model('listings', ListingSchema);
