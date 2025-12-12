const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/workoutPlan.controller');


router.get('/', ctrl.listPlans);
router.get('/:id', ctrl.getPlan);
router.post('/', ctrl.createPlan);
router.put('/:id', ctrl.updatePlan);
router.patch('/:id', ctrl.updatePlan);
router.delete('/:id', ctrl.deletePlan);


module.exports = router;