const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/exercises.controller');


router.get('/', ctrl.listExercises);
router.get('/:id', ctrl.getExercise);
router.post('/', ctrl.createExercise);
router.put('/:id', ctrl.updateExercise);
router.patch('/:id', ctrl.updateExercise);
router.delete('/:id', ctrl.deleteExercise);


module.exports = router;