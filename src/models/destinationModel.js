const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Account = require('./accountModel');

const Destination = sequelize.define('Destination', {
    destinationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headers: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

Account.hasMany(Destination, { foreignKey: 'accountId', onDelete: 'CASCADE' });
Destination.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = Destination;
