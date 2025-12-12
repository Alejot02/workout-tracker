// helper base controller functions for JSON-backed resources
const { v4: uuidv4 } = require('uuid');
const store = require('../utils/jsonStore');


async function list(req, res, name) {
const items = await store.read(name);
res.status(200).json(items);
}


async function getById(req, res, name) {
const { id } = req.params;
const items = await store.read(name);
const item = items.find(x => x.id === id);
if (!item) return res.status(404).json({ error: `${name} no encontrado` });
res.status(200).json(item);
}


async function create(req, res, name, validator) {
const payload = req.body;
const validation = validator ? validator(payload) : { valid: true };
if (!validation.valid) return res.status(400).json({ error: validation.message });


const items = await store.read(name);
const now = new Date().toISOString();
const newItem = { id: uuidv4(), ...payload, createdAt: now };
items.push(newItem);
await store.write(name, items);
res.status(201).json(newItem);
}


async function update(req, res, name, validator) {
const { id } = req.params;
const payload = req.body;
const items = await store.read(name);
const idx = items.findIndex(x => x.id === id);
if (idx === -1) return res.status(404).json({ error: `${name} no encontrado` });


const validation = validator ? validator(payload, true) : { valid: true };
if (!validation.valid) return res.status(400).json({ error: validation.message });


const now = new Date().toISOString();
items[idx] = { ...items[idx], ...payload, updatedAt: now };
await store.write(name, items);
res.status(200).json(items[idx]);
}


async function remove(req, res, name) {
const { id } = req.params;
const items = await store.read(name);
const idx = items.findIndex(x => x.id === id);
if (idx === -1) return res.status(404).json({ error: `${name} no encontrado` });
const deleted = items.splice(idx, 1);
await store.write(name, items);
res.status(204).send();
}


module.exports = { list, getById, create, update, remove };