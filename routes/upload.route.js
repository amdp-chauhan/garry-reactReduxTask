const Router = require('express').Router
const validate = require('express-validation');
const uploadCtrl = require('../controllers/upload.controller');

var router = Router()

router.route('/')
  .get(uploadCtrl.list)
  .post(uploadCtrl.create);


module.exports = router;
