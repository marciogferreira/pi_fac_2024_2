const { Sequelize } = require('sequelize');
//Sequelize é uma ORM - Object Relational Mapping
// npm install sequelize mysql2
const Connection = new Sequelize({
    dialect:'mysql',
    host: 'localhost',
    username: 'root',
    password: '123123',
    database: 'ads42',
})
// CRUD COM SQL
// Connection.query("INSERT INTO usuarios(nome) values ('admin')");
// Connection.query("SELECT * FROM  usuarios");
// Connection.query("SELECT * FROM  usuarios WHERE id = 1");
// Connection.query("UPDATE usuarios SET nome = 'admin1' WHERE id = 1");
// Connection.query("DELETE FROM usuarios WHERE id = 1");

module.exports = Connection;