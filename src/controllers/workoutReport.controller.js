const base = require('./base.controller');


function validateReport(payload, isUpdate = false) {
if (!isUpdate && (!payload.userId || !payload.period)) {
return { valid: false, message: 'userId y period son requeridos' };
}
return { valid: true };
}


module.exports = {
list: (req, res) => base.list(req, res, 'workoutReports'),
get: (req, res) => base.getById(req, res, 'workoutReports'),
create: (req, res) => base.create(req, res, 'workoutReports', validateReport),
update: (req, res) => base.update(req, res, 'workoutReports', validateReport),
remove: (req, res) => base.remove(req, res, 'workoutReports')
};