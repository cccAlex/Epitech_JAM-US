const mongoose = require('mongoose');
const moment = require('moment')

const Schema = mongoose.Schema;

const ticketSchema = Schema({
    email: { type: String, required: true},
    category: { type: String, required: true},
    message: { type: String, required: true},
    posted: { type: String, required: false, default: moment().format("DD/MM/YYYY HH:mm")},
});

module.exports = mongoose.model('Ticket', ticketSchema);