const { v4: uuidv4 } = require('uuid');
const Account = require('../models/accountModel');

const createAccount = async (req, res) => {
    try {
        const { email, name, website } = req.body;
        const account = await Account.create({ email, name, website, appSecretToken: uuidv4() });
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAccount = async (req, res) => {
    try {
        const account = await Account.findByPk(req.params.accountId);
        if (account) {
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: "Account not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateAccount = async (req, res) => {
    try {
        const { email, name, website } = req.body;
        const account = await Account.findByPk(req.params.accountId);
        if (account) {
            account.email = email || account.email;
            account.name = name || account.name;
            account.website = website || account.website;
            await account.save();
            res.status(200).json(account);
        } else {
            res.status(404).json({ message: "Account not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteAccount = async (req, res) => {
    try {
        const account = await Account.findByPk(req.params.accountId);
        if (account) {
            await account.destroy();
            res.status(200).json({ message: "Account deleted" });
        } else {
            res.status(404).json({ message: "Account not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createAccount, getAccount, updateAccount, deleteAccount };
