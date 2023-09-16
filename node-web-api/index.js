const express = require('express');
const mysql = require("mysql");

const app = express();
app.use(express.json());  // En Express 4.x sustituye al body-parser

const db = mysql.createConnection({

    host: "cachavezmysql.mysql.database.azure.com",

    user: "cachavez",

    password: "Pa$$w0rd5678",

    database: "cursoves",

});

//const nombres = ['Juan', 'Pedro', 'Maria'];

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// HTTP endpoints
app.get('/clientes/nombres', (req, res) => {
    let sql = "SELECT nombre FROM nombres";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/clientes/nombres/agregar', (req, res) => {
    //nombres.push(req.body.nombre);
    let nombre = req.body.nombre;
    let sql ="INSERT INTO nombres (nombre) VALUES (?)";
    db.query(sql, [nombre], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json("Nombre agregado correctamente");
    });
});