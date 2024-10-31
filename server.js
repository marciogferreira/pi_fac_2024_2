const express = require('express');
const cors = require('cors')

const Connection = require('./config/Connection');
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

// http://localhost:3000/usuarios
app.get('/usuarios', async (req, res) => {
    const [lista] = await Connection.query("SELECT * FROM usuarios")
    return res.json(lista)
})

// http://localhost:3000/usuarios/4
app.get('/usuarios/:id', async (req, res) => {
    const id = req.params.id
    const [dado] = await Connection.query("SELECT * FROM usuarios WHERE id = " +id)
    return res.json(dado)
})
// CRIAR USUARIOS VIA POST
app.post('/usuarios', (req, res) => {
    const body = req.body
    const { nome, login, senha } = body;
    const result = Connection.query(`
        INSERT INTO usuarios(nome, login, senha) 
        VALUES('${nome}', '${login}', '${senha}')
    `)
    return res.json(result);
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    const { nome, login, senha } = body;
    const result = Connection.query(`
        UPDATE usuarios SET nome = '${nome}', login = '${login}', senha = '${senha}' 
        WHERE id =  ${id}
    `)
    return res.json(result);
})


app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const result = Connection.query(`
        DELETE FROM usuarios WHERE id = ${id}
    `)
    return res.json({message: 'Usuario deletado com sucesso.'});
})


// GET, POST, PUT, DELETE - endPoint
// Passagem de Querys, Params e Dados na Body


app.listen(3000, 'localhost', () => {
    console.log("Servidor executando http://localhost:3000")
});
