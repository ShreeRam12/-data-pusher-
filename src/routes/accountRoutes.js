const express = require('express');
const { createAccount, getAccount, updateAccount, deleteAccount } = require('../controllers/accountController');
const router = express.Router();

router.post('/accounts', createAccount);
router.get('/accounts/:accountId', getAccount);
router.put('/accounts/:accountId', updateAccount);
router.delete('/accounts/:accountId', deleteAccount);

module.exports = router;
