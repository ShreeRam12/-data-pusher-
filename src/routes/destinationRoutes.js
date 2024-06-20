const express = require('express');
const { createDestination, getDestinationsByAccount, updateDestination, deleteDestination } = require('../controllers/destinationController');
const router = express.Router();

router.post('/destinations', createDestination);
router.get('/destinations/:accountId', getDestinationsByAccount);
router.put('/destinations/:destinationId', updateDestination);
router.delete('/destinations/:destinationId', deleteDestination);

module.exports = router;
