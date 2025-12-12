const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller.js');


router.get('/', ctrl.listUsers);
router.get('/:id', ctrl.getUser);
router.post('/', ctrl.createUser);
router.put('/:id', ctrl.updateUser);
router.patch('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);


module.exports = router;