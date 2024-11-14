const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const TypePaymentModel = Connection.define(
    'TypePaymentModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_pagamento',
    }
)

module.exports = TypePaymentModel;