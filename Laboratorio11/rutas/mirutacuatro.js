const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario de números</title>
    </head>
    <body>
        <h2>Ingresa tres números:</h2>
        <form action="/mirutacuatro" method="post">
            <label for="num1">Número 1:</label>
            <input type="number" id="num1" name="num1" required><br><br>

            <label for="num2">Número 2:</label>
            <input type="number" id="num2" name="num2" required><br><br>

            <label for="num3">Número 3:</label>
            <input type="number" id="num3" name="num3" required><br><br>

            <input type="submit" value="Enviar">
        </form>
    </body> 
    </html>
  `);
  response.redirect("/mensaje-recibido");
});

router.post("/", (request, response) => {
  // se crea una variable para guardar la informacion que viene del usuario
  let body = "";
  request.on("data", (chunk) => {
    body += chunk.toString(); // convertir el buffer a string
  });
  request.on("end", () => { 
    const formData = new URLSearchParams(body); //ECMAScript estándar
    let num1 = parseInt(formData.get("num1"));
    let num2 = parseInt(formData.get("num2"));
    let num3 = parseInt(formData.get("num3"));

    let suma = num1 + num2 + num3;

    // se avisa en la consola que se ha recibido la informacion
    console.log("La suma de los numeros es: " + suma);
    console.log("Datos recibidos y procesados correctamente.\n");

    // Redireccionar a /mensaje-recibido con la suma como parámetro en la URL
    response.redirect(`/mensaje-recibido?suma=${suma}`);
  });
});

module.exports = router;