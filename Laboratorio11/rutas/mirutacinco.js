const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>Esta es la ruta cinco. Pocos viajeros han llegando hasta la ruta cinco. Toma una galleta de viajero "(¿(!)?)".</h1>
        </body>
        </html>
    `);
  response.end();
});

module.exports = router;
