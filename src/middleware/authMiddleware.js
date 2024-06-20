const Account = require('../models/accountModel');

const authenticate = async (req, res, next) => {
    const token = req.headers['cl-x-token'];
    if (!token) {
        return res.status(401).json({ message: "Unauthenticated" });
    }

    const account = await Account.findOne({ where: { appSecretToken: token } });
    if (!account) {
        return res.status(401).json({ message: "Unauthenticated" });
    }

    req.account = account;
    next();
};

module.exports = { authenticate };
