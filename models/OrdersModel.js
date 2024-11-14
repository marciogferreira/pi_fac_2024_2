const { DataTypes } = require ("sequelize");
const Connection = require ("../config/Connection");
const UserModel = require("./UserModel");
const TransactionsModel = require("./TransactionsModel");
const TypePaymentModel = require("./TypePaymentModel");

const OrdersModel = Connection.define("Orders", {
    codigo:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    data_pedido: {
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    total:{
        type:DataTypes.DECIMAL(15,2),
        allowNull: false
    },
    status_pedido:{
        type:DataTypes.STRING,
        allowNull: false
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: UserModel,
            key: "id"
        }
    },
    tipo_pagamento_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: TypePaymentModel,
            key: "id"
        }
    },
    transacao_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TransactionsModel,
            key: "id"
        }
    },
    data_conclusao:{
        type:DataTypes.DATEONLY,
        allowNull: false
    }
},{
    tableName: "pedido"
})

module.exports = OrdersModel