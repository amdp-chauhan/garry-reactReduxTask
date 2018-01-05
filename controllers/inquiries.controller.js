const Inquiry = require('../models/inquiries.model');
/**
 * Add New Inquiry
 */
function create(req, res, next) {
  let payload = req.body;
  Inquiry.create(payload)
    .then(inquiry => res.json(inquiry))
    .catch(e => next(e));
}

/**
 * Get Inquiry list
 */
function list(req, res, next) {
  Inquiry.list()
    .then(Inquirys => res.json(Inquirys))
    .catch(e => next(e));
}

/**
 * Get Inquiry by ID
 */
function show(req, res, next) {
  Inquiry.show(req.params.id)
    .then(Inquiry => res.json(Inquiry))
    .catch(e => next(e));
}

/**
 * Update Inquiry by id
 */
function update_features(req, res, next) {
  Inquiry.show(req.params.id)
    .then(Inquiry => {
      Inquiry.set({features: req.body});
      Inquiry.save()
        .then(updatedInquiry => res.json(updatedInquiry))
        .catch(e => next(e));
    })
    .catch(e => next(e));
}

module.exports = {create,list,show,update_features};
