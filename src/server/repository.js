const PouchDB = require('pouchdb');
const db = new PouchDB('database');

module.exports = {
    put: put,
    get: get,
}

function put(id, obj) {
    let dbObj = Object.assign({}, obj);
    dbObj._id = '' + id;
    return db.put(dbObj);
}

function get(id) {
    return db.get('' + id);
}