const express = require('express');
const Connection = require('./config/Connection');
const app = express();

app.get('/', async (req, res) => {
    return res.send("Servidor Backend")
});

app.get('/usuarios', async (req, res) => {
    const lista = await Connection.query("SELECT * FROM usuarios")
    return res.json(lista)
})


// GET, POST, PUT, DELETE - endPoint
// Passagem de Querys, Params e Dados na Body


app.listen(3000, 'localhost', () => {
    console.log("Servidor executando http://localhost:3000")
});
