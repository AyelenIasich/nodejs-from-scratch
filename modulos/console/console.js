// console.log("Hello world!");
// console.error("show error message");
// console.warn("show a warning");

let tabla = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
];
// console.table(tabla);

// console.group("Inicio");
// console.log("Hola");
// console.log("Bla bla bla");
// console.log("Adios");
// console.groupEnd("Inicio");

function function1() {
  console.group("funcion 1");
  console.log("Se ejecuta la funcion 1 ");
  function2();
  console.log("Volvemos a la funcion 1 ");
  console.groupEnd("funcion 1");
}

function function2() {
    console.group("funcion 2");
    console.log("Ahora estamos en la funcion 2 ");
    console.groupEnd("funcion 2");
}

// function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

