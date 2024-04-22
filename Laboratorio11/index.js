const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// ruta por defecto (menu)
app.get("/", (request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>Ingresa en la barra del buscador el nombre de la ruta.<br>Ruta 1: mirutauno<br>Ruta 2: mirutados<br>Ruta 3: mirutatres<br>Ruta 4: mirutacuatro (forma que envia datos al servidor por POST)<br>Ruta 5: mirutacinco</h1>
        </body>
        </html>
    `);
  response.end();
});

// importacion de modulos individuales
const mirutaunoRouter = require("./rutas/mirutauno");
app.use("/mirutauno", mirutaunoRouter);
const mirutadosRouter = require("./rutas/mirutados");
app.use("/mirutados", mirutadosRouter);
const mirutatresRouter = require("./rutas/mirutatres");
app.use("/mirutatres", mirutatresRouter);
const mirutacuatroRouter = require("./rutas/mirutacuatro");
app.use("/mirutacuatro", mirutacuatroRouter);
const mensajerecibidoRouter = require("./rutas/mensaje-recibido");
app.use("/mensaje-recibido", mensajerecibidoRouter);
const mirutacincoRouter = require("./rutas/mirutacinco");
app.use("/mirutacinco", mirutacincoRouter);

// respuesta por defecto al detectar ruta inexistente
app.use((request, response, next) => {
  response.statusCode = 404;
  response.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Error 404. Ruta no existente. Un clásico 2.</h1>
            </body>
            </html>
        `);
  response.end();
});

// iniciar servidor
const server = http.createServer((request, response) => {
  console.log(request.url);
});
app.listen(3000);
