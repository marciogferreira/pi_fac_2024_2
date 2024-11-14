const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const RoutesPublics = express.Router()

RoutesPublics.get('/', async (req, res) => {
    return res.send("Servidor Backend")
});
RoutesPublics.post('/login', AuthController.login)
RoutesPublics.post('/registrar', UserController.criarUsuario)

module.exports = RoutesPublics;