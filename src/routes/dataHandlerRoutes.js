const express = require('express');
const { handleIncomingData } = require('../controllers/dataHandlerController');
const router = express.Router();

router.post('/server/incoming_data', handleIncomingData);

module.exports = router;
