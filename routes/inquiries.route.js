const Router = require('express').Router
const validate = require('express-validation');
const inquiryCtrl = require('../controllers/inquiries.controller');

var router = Router()

router.route('/')
  .post(inquiryCtrl.create)
  .get(inquiryCtrl.list);

router.route('/:id')
  .get(inquiryCtrl.show);


module.exports = router;
