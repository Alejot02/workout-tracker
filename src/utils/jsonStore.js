// Small helper to read/write JSON files safely
const fs = require('fs').promises;
const path = require('path');


function filePath(name) {
return path.join(__dirname, '..', 'data', name + '.json');
}


async function read(name) {
const p = filePath(name);
try {
const raw = await fs.readFile(p, 'utf8');
return JSON.parse(raw);
} catch (err) {
if (err.code === 'ENOENT') return [];
throw err;
}
}


async function write(name, data) {
const p = filePath(name);
await fs.writeFile(p, JSON.stringify(data, null, 2), 'utf8');
}


module.exports = { read, write };