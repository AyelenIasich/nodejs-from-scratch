function otraFuncion() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi funcion asincrona");
      cb(error);
    }
  }, 1000);
}

try {
//   otraFuncion();
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error.message);
  console.error("Pero no pasa nada, el error esta controlado");
}

console.log(
  "esto que esta aqui se ejecuta porque el error anterior esta controlado"
);


seRompeAsincrona((err)=>{
    console.error(err.message);
})
