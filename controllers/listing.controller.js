const Listing = require('../models/listing.model');
const axios = require('axios');
const async = require('async');
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
        .then(updatedListing => {
          if (updatedListing.hasOwnProperty('mlsId')) {
            axios.get(`https://api.simplyrets.com/properties/${updatedListing.mlsId}`, {
              headers: {
                Authorization: `Basic ${Buffer.from('nav_4t3434y2:5644q3561335n05t').toString('base64')}`
              }
            })
            .then(response => {
              updatedListing.populate('features.icon').exec()
                .then(populated => {
                  response._id = populated._id;
                  response.features = populated.features;
                  res.json(response);
                })
                .catch(e => next(e));
            })
            .catch(e => next(e));
          }else{
            res.json(updatedListing);
          }
        })
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
     async.each(listing.data, (item, callback) => {
       Listing.get_by_mls(item.mlsId)
        .then(listing => {
          if (!listing) {
            Listing.create({mlsId:item.mlsId})
              .then(res => {
                item._id = res._id;
                item.features = [];
                callback();
              });
          }else{
            item.features = listing.features;
            item._id = listing._id;
            callback();
          }
        })
        .catch(e => next(e));
     }, (err) => {
       if (err) {

       }else{
         res.json(listing.data[0]);
       }
     });
     // listing.forEach(item => {
     //   Listing.get_by_mls(item.mlsId)
     //    .then(listing => {
     //      if (!listing) {
     //        Listing.create({mlsId:item.mlsId})
     //      }
     //    })
     // });
   })
   .catch(e => next(e));
}

/**
 * Get RETS Mls by id
 */
 function show_rets(req, res, next) {
   Listing.show(req.params.id)
    .then(listing => {
        axios.get(`https://api.simplyrets.com/properties/${listing.mlsId}`, {
          headers: {
            Authorization: `Basic ${Buffer.from('nav_4t3434y2:5644q3561335n05t').toString('base64')}`
          }
        })
        .then(response => {
          response.data.features = listing.features;
          response.data._id = listing._id;
          res.json(response.data);
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
 }

module.exports = {list,show,update_features,get_rets,show_rets};
