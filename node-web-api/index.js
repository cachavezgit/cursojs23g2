const express = require('express');

const app = express();
app.use(express.json());  // En Express 4.x sustituye al body-parser

const nombres = ['Juan', 'Pedro', 'Maria'];

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// HTTP endpoints
app.get('/clientes/nombres', (req, res) => {
    res.json(nombres);
});

app.post('/clientes/nombres/agregar', (req, res) => {
    nombres.push(req.body.nombre);
    res.json("Nombre agregado correctamente");
});