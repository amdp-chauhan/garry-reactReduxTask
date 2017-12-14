const  mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Listing Schema
 */
const ListingHeaderImageSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true
  }
});

/**
 * Methods
 */
ListingHeaderImageSchema.method({
});

/**
 * Statics
 */
ListingHeaderImageSchema.statics = {
  /**
  * List all listings
  */
  list() {
    return this.find()
    .exec();
  }
}

module.exports = mongoose.model('listing_header_images', ListingHeaderImageSchema);
