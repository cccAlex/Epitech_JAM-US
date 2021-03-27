const Material = require('../models/Materials');

const getMaterials = (req, res) => {
    Material.find({ approved : false }).sort({_id : -1}).exec()
    .then((data) => {
        res.send({ status: true, data: data})
    })
    .catch((err) => res.send({ status:false, data: err}))
};

module.exports = getMaterials;