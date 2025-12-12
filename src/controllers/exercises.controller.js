const base = require('./base.controller');


function validateExercise(payload, isUpdate = false) {
if (!isUpdate && (!payload.name || !payload.muscleGroup)) {
return { valid: false, message: 'name y muscleGroup son requeridos' };
}
return { valid: true };
}


module.exports = {
listExercises: async (req, res) => {
const exercises = await require('../utils/jsonStore').read('exercises');
const { category, search } = req.query;
let result = exercises;
if (category) result = result.filter(e => e.category === category);
if (search) result = result.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
res.status(200).json(result);
},
getExercise: (req, res) => base.getById(req, res, 'exercises'),
createExercise: (req, res) => base.create(req, res, 'exercises', validateExercise),
updateExercise: (req, res) => base.update(req, res, 'exercises', validateExercise),
deleteExercise: (req, res) => base.remove(req, res, 'exercises')
};