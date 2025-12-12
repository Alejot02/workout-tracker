const base = require('./base.controller');


function validateSchedule(payload, isUpdate = false) {
if (!isUpdate && (!payload.workoutPlanId || !payload.scheduledDate)) {
return { valid: false, message: 'workoutPlanId y scheduledDate son requeridos' };
}
return { valid: true };
}


module.exports = {
list: (req, res) => base.list(req, res, 'workoutSchedules'),
get: (req, res) => base.getById(req, res, 'workoutSchedules'),
create: (req, res) => base.create(req, res, 'workoutSchedules', validateSchedule),
update: (req, res) => base.update(req, res, 'workoutSchedules', validateSchedule),
remove: (req, res) => base.remove(req, res, 'workoutSchedules')
};