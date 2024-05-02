// setup (start)
const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// feature 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views" + "/partials")));

// feature
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// feature. Express => EJS.
app.get("/mirutauno", (req, res) => {
  res.render('mirutauno');
});

app.get("/mirutados", (req, res) => {
  res.render('mirutados');
});

app.get("/mirutatres", (req, res) => {
  res.render('mirutatres');
});

app.get("/mirutacuatro", (req, res) => {
  res.render('mirutacuatro');
});

app.get("/mirutacinco", (req, res) => {
  res.render('mirutacinco');
});

// por alguna razón debo ussar path.join para que funcione
app.get("/mensaje-recibido", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/mensaje-recibido.html"));
});

// POST del formulario hacia registros.txt
app.post("/mensaje-recibido", (req, res) => {
  const { num1, num2, num3 } = req.body;
  const data = `Número 1: ${num1}, Número 2: ${num2}, Número 3: ${num3}\n`;
  fs.appendFile("registros.txt", data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al guardar los datos");
    } else {
      console.log("Datos guardados correctamente");
      res.redirect("/mensaje-recibido");
    }
  });
});

// respuesta por defecto al detectar ruta inexistente
app.get("*", (req, res) => {
  res.statusCode = 404;
  res.render(path.join(__dirname, "./views/error404.ejs"));
});

// iniciar servidor
const server = http.createServer((req, res) => {
  console.log(req.url);
});
app.listen(3000);

/* 
¿Qué otros templating engines existen para node?

-> Pug (anteriormente conocido como Jade): Es un motor de plantillas con sintaxis simplificada y basada en la indentación. Pug es conocido por su formato conciso y su capacidad para generar HTML de manera eficiente.

-> Handlebars: Es un motor de plantillas que permite la creación de plantillas HTML con expresiones y bloques. Handlebars sigue el principio de "separación de preocupaciones", lo que facilita la creación de plantillas legibles y mantenibles.

-> Y pues EJS :)
*/
