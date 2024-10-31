const express = require('express');
const cors = require('cors')

const Connection = require('./config/Connection');
const UserController = require('./controllers/UserController');
const app = express();
app.use(cors({
    // origin: 'http://localhost:5500'
}))
app.use(express.json()) // LIBERA PASSAGEM DE DADOS PELO BODY

// http://localhost:3000/
app.get('/', async (req, res) => {
    return res.send("Servidor Backend")
});
// https://github.com/marciogferreira/pi_fac_2024_2

app.get('/inserir-usuario', async (req, res) => {
    const dados = await Connection.query("INSERT INTO usuarios(nome) VALUES('admin')")
    return res.json(dados)
})

// MIDDLEWARE
app.use((req, res, next) => {
    let logado = false;
    if(logado === false) {
        return res.send("Não Logado");
    }
    // Pode seguir adiante
    next();
});

// http://localhost:3000/usuarios
app.get('/usuarios', UserController.listarUsuarios)
app.get('/usuarios/:id', UserController.consultarPorId)
app.post('/usuarios', UserController.criarUsuario)
app.put('/usuarios/:id', UserController.atualizarUsuario)
app.delete('/usuarios/:id', UserController.deletarUsuario)

// GET, POST, PUT, DELETE - endPoint
// Passagem de Querys, Params e Dados na Body


app.listen(3000, 'localhost', () => {
    console.log("Servidor executando http://localhost:3000")
});
