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
    require: false
  },
  price: {
    type: Number,
    require: false
  },
  description: {
    type: String,
    require: false
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
      require: false
    },
    name: {
      type: String,
      require: false
    },
    value: {
      type: String,
      require: false
    }
  }],
  facts: [{
    icon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'icons',
      require: false
    },
    type: {
      type: String,
      require: false
    },
    value: {
      type: String,
      require: false
    }
  }],
  agents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'agents'
  }],
  mlsId: {
    type: Number,
    require: false
  }
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
  },
  /**
  * Get Listing By MLS No.
  */
  get_by_mls(id) {
    return this.findOne({"mlsId":id})
    .populate('features.icon')
    .exec();
  }
}

module.exports = mongoose.model('listings', ListingSchema);
