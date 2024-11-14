const { DataTypes } = require ("sequelize");
const Connection = require ("../config/Connection");

const OrderItemsModel = Connection.define("OrderItems", {
    quantidade:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    valor:{
        type:DataTypes.DECIMAL(15,2),
        allowNull: false
    },
    id_pedido:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    id_produto:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: "itens_pedido"
})

module.exports = OrderItemsModel;