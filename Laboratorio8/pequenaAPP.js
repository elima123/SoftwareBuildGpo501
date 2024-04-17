// 2. Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  //-----------------------
  switch (request.url) {
    case "/":
      response.setHeader("Content-Type", "text/html");
      response.write(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Problema 1</title>
</head>
<body>
    <script>
        // parseInt trasnforma string a numero entero 
        // prompt pide un dato al usuario
        let numInput = parseInt(prompt("Ingrese un número:"));

        // condicion para numeros positivos
        if (numInput > 0) {
        
            // implementa etiqueta <table> "as built in"
            document.write("<table>");
          
            // implementa header de la tabla a través de etiquetas
            document.write("<tr><th>Número </th><th>Cuadrado </th><th>Cubo  </th></tr>");
          
            // funcion for que implementa cada linea escribiendo etiquetas + operacion
            for (let i = 1; i <= numInput; i++) {
                document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
            }

            // cierra etiqueta <table> "as built in"
            document.write("</table>");
          
        // En caso de no ser un numero positivo, indicar
        } else {
            alert("El número ingresado no es válido.");
            document.write("El número ingresado no es válido.");
        }

        document.write("<br>Caso de Prueba #1, Numero 7.<br>");
        for (let i = 1; i <= 7; i++) {
          document.write("Base: " + i + " Cuadrado: " + i*i + " Cubo: " + i*i*i + "<br>");}     
        document.write("<br>Caso de Prueba #2, Numero -5.<br>El número ingresado no es válido.<br>");
        document.write("<br>Caso de Prueba #3, Numero 12.<br>");
        for (let i = 1; i <= 12; i++) {
          document.write("Base: " + i + " Cuadrado: " + i*i + " Cubo: " + i*i*i + "<br>");}
        
    </script>

    <p>1. ¿Qué diferencias y semejanzas hay entre Java y JavaScript? R. Pues el desarrollo de Java es más complejo, me recuerda mucho a C++ el programar en Java. JavaScript siento que es la versión de Java que se adaptó a las necesidades de aplicaciones web con la trifecta de HTML + JS + CSS. Realmente son muy diferentes al programar. En cuanto a semejanzas podriamos decir que ambos pueden ejercer el paradigma de programación orientado a objetos.</p>
</body>
</html>
            `);
      response.end();
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
