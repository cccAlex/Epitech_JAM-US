const Material = require('../models/Materials');

const deleteMaterial = (req, res) => {
    const { id } = req.body;
    if (!id) res.send({ status: false, data : 'Missing id' })
    else {
        Material.deleteOne({ _id : id }).exec()
        .then(() => {
            res.send({ status: true, data: 'Successfully deleted'})
        })
        .catch((err) => res.send({ status:false, data: err}))
    }
};

module.exports = deleteMaterial;