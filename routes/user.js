const Router = require('express').Router
const userCtrl = require('../controllers/user.controller');

var router = Router();

router.route('/')
  .post(userCtrl.post);

module.exports = router
