const Router = require('express').Router
const validate = require('express-validation');
const iconCtrl = require('../controllers/icon.controller');

var router = Router()

router.route('/')
  .get(iconCtrl.list);

module.exports = router;
