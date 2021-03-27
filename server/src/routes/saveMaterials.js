const Material = require('../models/Materials');

const saveMaterials = async (req, res) => {
    const { type, location, quantity, contact } = req.body;
    if (!type || !location || !quantity || !contact) res.send({ status: false, data: 'Missing information'})
    else {
        const material = await new Material({ type, location, quantity, contact }).save()
        res.send({ status: true, data: material })
    }
};

module.exports = saveMaterials;