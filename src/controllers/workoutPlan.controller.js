const base = require('./base.controller');


function validatePlan(payload, isUpdate = false) {
if (!isUpdate && (!payload.userId || !payload.title)) {
return { valid: false, message: 'userId y title son requeridos' };
}
return { valid: true };
}


module.exports = {
listPlans: (req, res) => base.list(req, res, 'workoutPlans'),
getPlan: (req, res) => base.getById(req, res, 'workoutPlans'),
createPlan: (req, res) => base.create(req, res, 'workoutPlans', validatePlan),
updatePlan: (req, res) => base.update(req, res, 'workoutPlans', validatePlan),
deletePlan: (req, res) => base.remove(req, res, 'workoutPlans')
};