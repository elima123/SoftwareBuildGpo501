// index.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Importa el modelo
const BooksModel = require('./models/booksModel');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

// Controlador para la ruta /test_db
app.get('/test_db', async (req, res) => {
    try {
        // Llama al método correspondiente en el modelo
        const books = await BooksModel.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});



/*

¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?
Tiene varias ventajas como la separación de sus componentes, ayuda a la construcción del código e implementación de requisitos facilitando su modulación.
También existe la seguridad al limitar el acceso directo a la manipulación de la base de datos.

¿Qué es SQL injection y cómo se puede prevenir?
Es un tipo de ataque informático en el que un atacante inserta código SQL malicioso en una consulta SQL. 
El objetivo de este ataque es manipular la base de datos subyacente para realizar acciones no autorizadas.
Se intenta la eliminación de datos, la modificación de datos o la revelación de información confidencial.
Es muy sencillo de prevenir, solo se debe "desinfectar" todas las entradas de información por parte de usuario.
Esto se lleva a cabo a través de la parametrización de consultas y el principio de menor privilegio.

*/