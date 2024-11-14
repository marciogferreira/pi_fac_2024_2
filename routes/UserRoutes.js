const express = require('express');
const UserController = require('../controllers/UserController');
const UserRoutes = express.Router()

UserRoutes.get('/usuarios', UserController.listarUsuarios)
UserRoutes.get('/usuarios/:id', UserController.consultarPorId)
UserRoutes.post('/usuarios', UserController.criarUsuario)
UserRoutes.put('/usuarios/:id', UserController.atualizarUsuario)
UserRoutes.delete('/usuarios/:id', UserController.deletarUsuario)

module.exports = UserRoutes;