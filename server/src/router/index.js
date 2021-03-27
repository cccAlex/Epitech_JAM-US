const express = require('express');
const router = express.Router();

const getMaterials = require('../routes/getMaterials');
const saveMaterials = require('../routes/saveMaterials');
const getApprovedMaterials = require('../routes/getApprovedMaterials');
const approveMaterial = require('../routes/approveMaterial');
const deleteMaterial = require('../routes/deleteMaterial');

router.get('/getMaterials', getMaterials);
router.get('/getApprovedMaterials', getApprovedMaterials);
router.post('/saveMaterials', saveMaterials);
router.post('/approveMaterial', approveMaterial)
router.post('/deleteMaterial', deleteMaterial)

const Login = require('../routes/Login');

router.post('/login', Login);

module.exports = router;