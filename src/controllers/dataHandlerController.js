const axios = require('axios');
const Account = require('../models/accountModel');
const Destination = require('../models/destinationModel');

const handleIncomingData = async (req, res) => {
    const token = req.headers['cl-x-token'];
    if (!token) {
        return res.status(401).json({ message: "Unauthenticated" });
    }

    try {
        const account = await Account.findOne({ where: { appSecretToken: token } });
        if (!account) {
            return res.status(401).json({ message: "Unauthenticated" });
        }

        const destinations = await Destination.findAll({ where: { accountId: account.accountId } });
        const data = req.body;

        destinations.forEach(async (destination) => {
            try {
                if (destination.method.toLowerCase() === 'get') {
                    await axios.get(destination.url, { params: data, headers: destination.headers });
                } else {
                    await axios({
                        method: destination.method,
                        url: destination.url,
                        data,
                        headers: destination.headers
                    });
                }
            } catch (error) {
                console.error(`Error sending data to ${destination.url}:`, error.message);
            }
        });

        res.status(200).json({ message: "Data processed" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { handleIncomingData };
