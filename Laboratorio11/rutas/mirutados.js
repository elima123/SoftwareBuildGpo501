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
                <h1>Bien! Haz llegado a la ruta numero dos. Recibe esta galleta en forma de ummm, dron creo, nose." o_o "</h1>
            </body>
            </html>
        `);
  response.end();
});

module.exports = router;