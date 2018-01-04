const Schedule = require('../models/tour_schedules.model');
/**
 * Add New Schedule
 */
function create(req, res, next) {
  let payload = req.body;
  console.log(payload);
  Schedule.create(payload)
    .then(Schedule => res.json(Schedule))
    .catch(e => next(e));
}

/**
 * Get Schedule list
 */
function list(req, res, next) {
  Schedule.list()
    .then(Schedules => res.json(Schedules))
    .catch(e => next(e));
}

/**
 * Get Schedule by ID
 */
function show(req, res, next) {
  Schedule.show(req.params.id)
    .then(Schedule => res.json(Schedule))
    .catch(e => next(e));
}

module.exports = {create,list,show};
