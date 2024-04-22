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
            <h1>hola mundo desde express xdxdd</h1>
        </body>
        </html>
    `);
  response.end();
});

module.exports = router;
