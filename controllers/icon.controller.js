const Icon = require('../models/icons.model');

/**
 * Get Listing list
 */
function list(req, res, next) {
  Icon.list()
    .then(icons => res.json(icons))
    .catch(e => next(e));
}

module.exports = {list};
