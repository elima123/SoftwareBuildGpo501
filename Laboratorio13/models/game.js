// Array para almacenar los juegos
const games = [];

module.exports = class Game {
    // Constructor de la clase. Sirve para crear un nuevo objeto y definir las propiedades del modelo.
    constructor(my_value) {
        this.attribute_1 = my_value;
    }

    // Método para guardar el nuevo objeto en el array.
    save() {
        // Se almacena el juego actual en el array.
        games.push(this);
    }

    // Método para devolver todos los objetos del array.
    static fetchAll() {
        // Se devuelve una copia del array para evitar modificaciones directas.
        return [...games];
    }
}
