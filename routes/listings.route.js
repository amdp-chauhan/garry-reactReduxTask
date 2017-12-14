const Router = require('express').Router
const validate = require('express-validation');
const listingCtrl = require('../controllers/listing.controller');

var router = Router()

router.route('/')
  .get(listingCtrl.list);

module.exports = router;
