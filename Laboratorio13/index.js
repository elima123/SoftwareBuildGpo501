const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views" + "/partials")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// feature: el controlador del juego + el modelo
const gameController = require("./controllers/game.controller");

app.get("/mirutauno", (req, res) => {
  res.render("mirutauno");
});
app.get("/mirutados", (req, res) => {
  const games = gameController.getAllGames();
  res.render("mirutados", { games: games });
});
app.get("/mensaje-recibido", (req, res) => {
  res.render("mensaje-recibido");
});

// feature: el usuario puede interactuar con el createGame del controlador
app.post("/createGame", (req, res) => {
  // Captura el nombre del juego del cuerpo de la solicitud
  const gameName = req.body.gameName;

  // Llama a la función del controlador para crear un nuevo juego
  gameController.createGame(gameName);

  // Redirige a la página principal u a donde desees después de crear el juego
  res.redirect("/mensaje-recibido");
});

app.get("*", (req, res) => {
  res.statusCode = 404;
  res.render(path.join(__dirname, "./views/error404.ejs"));
});
const server = http.createServer(app);
server.listen(3000, () => {});

/*

¿Qué beneficios encuentras en el estilo MVC?
Pues veo que es eficiente para el manejo de bases de datos y archivar información.
Veo también que al igual que EJS, tiene como esa facilidad de pegar código aquí y código allá.

¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
Pues igualmente que EJS, tiene la tendencia a generar código espagueti.
Además, lo sentí un poco complejo.

*/
