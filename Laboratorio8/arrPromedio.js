// EJECUTAR EN SHELL: node arrPromedio.js

// Una funcion que reciba un arreglo de números y devuelva su promedio.

// definicion de funcion
function arrPromedio(numeros) {
  // usar triple igual para comparar
  // if empty return 0
  if (numeros.empty) {
    return 0;
  } // usar llaves siempre

  // reduce() es una funcion de javascript que recibe dos parametros
  // total es la variable donde se almacenará la sumatoria
  // num es el nombre que se le pone al item que se está iterando en un array
  // 0 es el valor inicial de la sumatoria
  // todo lo demás es formato de la funcion
  // esta funcion es parecida a un for compacto "(for item & arr, let sum = 0, sum += item)"
  // esta funcion tiene un callback que indica la suma del item a total, este empezando en 0.
  let suma = numeros.reduce(function(total, num) {
    return total + num;
  }, 0);


  // calculo clasico de promedio
  let promedio = suma / numeros.length;

  return promedio;
}

// Ejemplo de uso
let miArreglo = [7, 7, 7, 5, 4, 6, 2, 9];
console.log("El promedio es:", arrPromedio(miArreglo));
// sencillo, se plantea un arreglo y se llama a la funcion
