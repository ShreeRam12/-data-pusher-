const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Account = sequelize.define('Account', {
    accountId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appSecretToken: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    website: {
        type: DataTypes.STRING
    }
});

module.exports = Account;
