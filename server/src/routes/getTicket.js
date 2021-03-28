const Ticket = require('../models/Tickets');

const getTicket = (req, res) => {
    Ticket.find().sort({_id : -1}).exec()
    .then((data) => {
        res.send({ status: true, data: data})
    })
    .catch((err) => res.send({ status:false, data: err}))
};

module.exports = getTicket;