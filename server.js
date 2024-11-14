const express = require('express');
const cors = require('cors');
const RoutesPublics = require('./routes/RoutesPublics');
const RoutesPrivates = require('./routes/RoutesPrivates');
const app = express();
app.use(cors({
    // origin: 'http://localhost:5500'
}))
app.use(express.json()) // LIBERA PASSAGEM DE DADOS PELO BODY
app.use(RoutesPublics)
app.use(RoutesPrivates)

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando http://localhost:3000")
});
