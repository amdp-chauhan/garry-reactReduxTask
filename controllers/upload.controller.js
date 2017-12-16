const Upload = require('../models/upload.model');

/**
 * Get Listing list
 */
function list(req, res, next) {
  Upload.list()
    .then(listings => res.json(uploads))
    .catch(e => next(e));
}

/**
 * Post New Upload
 */
function list(req, res, next) {
  Upload.list()
    .then(listings => res.json(uploads))
    .catch(e => next(e));
}

/**
 * Create New Upload
 */
function create(req, res, next) {
  Upload.create()
    .then(Uplaod => res.json(uploads))
    .catch(e => next(e));
}

module.exports = {list};
