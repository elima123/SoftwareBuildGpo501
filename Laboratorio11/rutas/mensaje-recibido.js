const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  // Obtener la suma de los parámetros de la URL
  let suma = request.query.suma;

  // Y se imprime y listo
  response.setHeader("Content-Type", "text/html");
  response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mensaje Recibido</title>
    </head>
    <body>
        <h2>¡Datos recibidos correctamente!</h2>
        <p>La suma de los números es: ${suma}</p>
    </body> 
    </html>
  `);
  response.end();
});

module.exports = router;
