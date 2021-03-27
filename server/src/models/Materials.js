const mongoose = require('mongoose');
const moment = require('moment')

const Schema = mongoose.Schema;

const materialSchema = Schema({
    type: { type: String, required: true},
    location: { type: String, required: true},
    quantity: { type: String, required: true},
    contact: { type: String, required: true },
    posted: { type: String, required: false, default: moment().format("DD/MM/YYYY HH:mm")},
    approved: {type: Boolean, required: false, default: false}
});

module.exports = mongoose.model('Material', materialSchema);