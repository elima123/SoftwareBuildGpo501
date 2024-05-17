const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const log = console.log;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));

const controller = require("./index.controller.js")

app.get('/products', controller.products);
app.post('/add_product', controller.add_product);
app.get('/prepare_million_products', controller.prepare_million_products);

// Iniciar el servidor
app.listen(3000, () => {
    log('Server listening to port 3000');
});

/*
Mejoré el botón de Submit.
¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications?
AJAX (Asynchronous JavaScript and XML) desempeña un papel crucial en el desarrollo de RIA's al permitir la interacción asíncrona entre el navegador 
y el servidor. Esto significa que los usuarios pueden realizar acciones sin necesidad de recargar toda la página, lo que crea una experiencia más 
fluida y dinámica similar a la de una aplicación de escritorio.

¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor?
En cuanto a las implicaciones de seguridad de AJAX, su capacidad para enviar y recibir datos de forma asíncrona también plantea desafíos de seguridad 
adicionales. Algunos de los problemas comunes incluyen la posibilidad de ataques de Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF).
Las validaciones de seguridad deben realizarse principalmente en el lado del servidor. Esto es crucial porque el lado del cliente es accesible y 
puede ser manipulado fácilmente por usuarios malintencionados. Aunque las validaciones del lado del cliente pueden proporcionar una experiencia 
de usuario más receptiva, no deben considerarse suficientes para garantizar la seguridad de la aplicación. Siempre se debe realizar una validación 
adicional en el lado del servidor para garantizar la integridad y la seguridad de los datos.

¿Qué es JSON?
JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y de fácil lectura que se utiliza comúnmente en aplicaciones web para 
transmitir datos entre el cliente y el servidor. Se basa en JavaScript, pero es independiente del lenguaje y es fácilmente legible tanto para humanos
como para máquinas. JSON es ampliamente utilizado en el desarrollo de aplicaciones web y es especialmente popular en combinación con AJAX debido a su 
simplicidad y eficiencia.
*/