const Destination = require('../models/destinationModel');

const createDestination = async (req, res) => {
    try {
        const { accountId, url, method, headers } = req.body;
        const destination = await Destination.create({ accountId, url, method, headers });
        res.status(201).json(destination);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDestinationsByAccount = async (req, res) => {
    try {
        const destinations = await Destination.findAll({ where: { accountId: req.params.accountId } });
        res.status(200).json(destinations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateDestination = async (req, res) => {
    try {
        const { url, method, headers } = req.body;
        const destination = await Destination.findByPk(req.params.destinationId);
        if (destination) {
            destination.url = url || destination.url;
            destination.method = method || destination.method;
            destination.headers = headers || destination.headers;
            await destination.save();
            res.status(200).json(destination);
        } else {
            res.status(404).json({ message: "Destination not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findByPk(req.params.destinationId);
        if (destination) {
            await destination.destroy();
            res.status(200).json({ message: "Destination deleted" });
        } else {
            res.status(404).json({ message: "Destination not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createDestination, getDestinationsByAccount, updateDestination, deleteDestination };
