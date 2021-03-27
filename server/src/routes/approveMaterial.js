const Material = require('../models/Materials');

const approveMaterial = (req, res) => {
    const { id } = req.body;
    if (!id) res.send({ status: false, data : 'Missing id' })
    else {
        Material.updateOne({ _id : id }, { approved: true }).exec()
        .then(() => {
            res.send({ status: true, data: 'Successfully approved'})
        })
        .catch((err) => res.send({ status:false, data: err}))
    }
};

module.exports = approveMaterial;