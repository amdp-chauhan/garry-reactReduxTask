const Listing = require('../models/listing.model');
const axios = require('axios');
/**
 * Get Listing list
 */
function list(req, res, next) {
  Listing.list()
    .then(listings => res.json(listings))
    .catch(e => next(e));
}

/**
 * Get Listing by ID
 */
function show(req, res, next) {
  Listing.show(req.params.id)
    .then(listing => res.json(listing))
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

/**
 * Get RETS Mls by id
 */
function get_rets(req, res, next) {
  axios.get(`https://api.simplyrets.com/properties`, {
    headers: {
      Authorization: `Basic ${Buffer.from('nav_4t3434y2:5644q3561335n05t').toString('base64')}`
    }
  })
   .then(listing => {
     console.log(listing);
     res.json(listing.data[0]);
   })
   .catch(e => next(e));
}

module.exports = {list,show,update_features,get_rets};
