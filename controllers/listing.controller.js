const Listing = require('../models/listing.model');

/**
 * Get Listing list
 */
function list(req, res, next) {
  Listing.list()
    .then(listings => res.json(listings))
    .catch(e => next(e));
}

/**
 * Update Listing by id
 */
function update_features(req, res, next) {
  Listing.show(req.params.id)
    .then(listing => {
      listing.set({features: req.body});
      listing.save()
        .then(updatedListing => res.json(updatedListing))
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = {list,update_features};
