const Ticket = require('../models/Tickets');

const saveTicket = async (req, res) => {
    const { email, category, message } = req.body;
    if (!email || !category || !message) res.send({ status: false, data: 'Missing information'})
    else {
        const ticket = await new Ticket({ email, category, message }).save()
        res.send({ status: true, data: ticket })
    }
};

module.exports = saveTicket;