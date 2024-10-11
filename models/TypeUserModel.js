const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const TypeUserModel = Connection.define(
    'TypeUserModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_usuario',
    }
)

module.exports = TypeUserModel;