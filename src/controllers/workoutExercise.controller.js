const base = require('./base.controller');


function validateWE(payload, isUpdate = false) {
if (!isUpdate && (!payload.workoutPlanId || !payload.exerciseId)) {
return { valid: false, message: 'workoutPlanId y exerciseId son requeridos' };
}
return { valid: true };
}


module.exports = {
list: (req, res) => base.list(req, res, 'workoutExercises'),
get: (req, res) => base.getById(req, res, 'workoutExercises'),
create: (req, res) => base.create(req, res, 'workoutExercises', validateWE),
update: (req, res) => base.update(req, res, 'workoutExercises', validateWE),
remove: (req, res) => base.remove(req, res, 'workoutExercises')
};