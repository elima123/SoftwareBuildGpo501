
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  //-----------------------
  switch (request.url) {
    case "/":
      response.setHeader("Content-Type", "text/html");
      response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Código en HTML</title>
                </head>
                <body>
                    <h1>Ingresa en la barra del buscador el nombre de la ruta.<br>Ruta 1: mirutauno<br>Ruta 2: mirutados<br>Ruta 3: rutaConForm</h1>
                </body>
                </html>
            `);
      response.end();
      break;
    case "/mirutauno":
      response.setHeader("Content-Type", "application/json");
      response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Código en HTML</title>
                </head>
                <body>
                    <h1>Bien! Haz llegado a la ruta numero uno. Recibe esta galleta en forma de corazón " <3 "</h1>
                </body>
                </html>
            `);
      response.end();
      break;
    case "/mirutados":
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
      break;
    case "/rutaConForm":
      if (request.method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
          body += chunk.toString(); // convertir el buffer a string
        });

        request.on("end", () => { 
          const formData = new URLSearchParams(body); //ECMAScript estandar y así
          let num1 = formData.get("num1");
          let num2 = formData.get("num2");
          let num3 = formData.get("num3");

          // en este caso, se muestra el comportamiento de los datos en un txt de consola
          const dataToWrite = `\nNúmero 1: ${num1}\nNúmero 2: ${num2}\nNúmero 3: ${num3}`;
          console.log(dataToWrite);
          console.log("La suma de los numeros es: " + (parseInt(num1) + parseInt(num2) + parseInt(num3)));
          console.log("Datos recibidos y procesados correctamente.\n");
        });
        
        response.end();
        
      } else if (request.method !== "POST") {
        response.setHeader("Content-Type", "text/html");
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
                        <form action="/rutaConForm" method="post">
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
        response.end();
      }
      break;
    default:
      response.statusCode = 404;
      response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Error 404. Ruta no existente. Un clásico.</h1>
                </body>
                </html>
            `);
      response.end();
      break;
  }
  //-----------------------
});
server.listen(3000);
