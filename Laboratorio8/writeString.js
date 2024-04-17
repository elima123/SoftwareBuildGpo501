// EJECUTAR EN SHELL: node writeString.js

// fs setup, debo declarar la libreria y el path del txt
const fs = require("fs"); //nose, supongo q asi se declara la libreria
const rutaArchivo = "writeString.txt";

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.

// definicion de funcion
function writeString(elString) {
  // llama la función writeFile del modulo fs (parece ser que el modulo se utiliza como variable)
  // recibe ruta, string, callback
  // un callback es una funcion que se activa al terminar la operacion correspondiente
  fs.writeFile(rutaArchivo, elString, function (err) {
    if (err) throw err; // classic c++ throw, que es como un return pero en este caso es un error
    console.log("¡El archivo se ha escrito correctamente!");
  });
}

// Ejemplo de uso, intente escribir algo en el txt y este automaticamente sobreescribirá
//    absolutamente todo el contenido para colocar este string en la linea 1
let miString = "Hola, mundo! Soy un string!";
writeString(miString);