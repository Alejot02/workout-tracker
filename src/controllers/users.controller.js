const store = require('../utils/jsonStore');
const base = require('./base.controller');


function validateUser(payload, isUpdate = false) {
if (!isUpdate && (!payload.name || !payload.email)) {
return { valid: false, message: 'name y email son requeridos' };
}
return { valid: true };
}


async function listUsers(req, res) {
const users = await store.read('users');
// filtros: role, search
const { role, search } = req.query;
let result = users;
if (role) result = result.filter(u => u.role === role);
if (search) result = result.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
res.status(200).json(result);
}


module.exports = {
listUsers,
getUser: (req, res) => base.getById(req, res, 'users'),
createUser: (req, res) => base.create(req, res, 'users', validateUser),
updateUser: (req, res) => base.update(req, res, 'users', validateUser),
deleteUser: (req, res) => base.remove(req, res, 'users')
};