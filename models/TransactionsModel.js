const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const TransactionsModel = Connection.define(
    "TransactionsModel",
    {
        codigo_transacao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status_transacao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DECIMAL(15,2)
        }
    },{
        tableName: "transacoes",
    }
);

module.exports = TransactionsModel;