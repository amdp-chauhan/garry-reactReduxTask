const Router = require('express').Router
const validate = require('express-validation');
const scheduleCtrl = require('../controllers/tour_schedule.controller');

var router = Router()

router.route('/')
  .post(scheduleCtrl.create)
  .get(scheduleCtrl.list);

router.route('/:id')
  .get(scheduleCtrl.show);


module.exports = router;
