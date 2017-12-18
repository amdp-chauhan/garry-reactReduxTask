const Router = require('express').Router
const validate = require('express-validation');
const listingCtrl = require('../controllers/listing.controller');

var router = Router()

router.route('/')
  .get(listingCtrl.list);

router.route('/:id/features')
  .put(listingCtrl.update_features);

module.exports = router;
