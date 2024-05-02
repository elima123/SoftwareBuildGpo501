const Game = require('../models/game');

// Función para crear un nuevo juego y guardarlo
exports.createGame = (name) => {
    const game = new Game(name);
    game.save();
    console.log('Juego creado y guardado exitosamente.');
};

// Función para obtener todos los juegos
exports.getAllGames = () => {
    return Game.fetchAll();
}

// Función para crear un nuevo juego y guardarlo
const createGame = (name) => {
    const game = new Game(name);
    game.save();
    console.log('Juego creado y guardado exitosamente.');
};

createGame('The Legend of Zelda: Breath of the Wild');
createGame('Super Mario Odyssey');
createGame('The Witcher 3: Wild Hunt');
createGame('Red Dead Redemption 2');
createGame('Final Fantasy VII Remake');