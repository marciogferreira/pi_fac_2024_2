const { DataTypes } = require ("sequelize");
const Connection = require ("../config/Connection");
const CategoryModel = require('./CategoryModel');

const ProductModel = Connection.define("ProductModel",
    {
        nome:{
            type:DataTypes.STRING,
            allowNull: false
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull: false
        },
        valor:{
            type:DataTypes.DECIMAL(15,2),
            allowNull: false,
        },
        custo:{
            type:DataTypes.DECIMAL(15,2),
            allowNull: false
        },
        quantidade:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        codigo:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        categoria_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: CategoryModel,
                key: "id"
            }
        }
},{
    tableName: "produtos"
});

module.exports = ProductModel;