const Listing = require('../models/listing.model');

/**
 * Get Listing list
 */
function list(req, res, next) {
  Listing.list()
    .then(listings => res.json(listings))
    .catch(e => next(e));
}

module.exports = {list};
