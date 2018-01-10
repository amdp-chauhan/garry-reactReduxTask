const Router = require('express').Router
const validate = require('express-validation');
const listingCtrl = require('../controllers/listing.controller');

var router = Router()

router.route('/')
  .get(listingCtrl.list);

router.route('/:id')
  .get(listingCtrl.show);

router.route('/:id/features')
  .put(listingCtrl.update_features);

router.route('/rets/:id')
  .get(listingCtrl.show_rets);

module.exports = router;
