const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection');
const TypeUserModel = require('./TypeUserModel');

const UserModel = Connection.define(
    'UserModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TypeUserModel,
                key: 'id'
            }
        }
    },
    {
        tableName: 'usuario',
    }
)

module.exports = UserModel;