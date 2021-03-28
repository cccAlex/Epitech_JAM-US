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
router.post('/approveMaterial', approveMaterial);
router.post('/deleteMaterial', deleteMaterial);

const Login = require('../routes/Login');

router.post('/login', Login);

const saveTicket = require('../routes/saveTicket');
const getTicket = require('../routes/getTicket');
const deleteTicket = require('../routes/deleteTicket');

router.post('/saveTicket', saveTicket);
router.get('/getTicket', getTicket);
router.post('/deleteTicket', deleteTicket);

module.exports = router;