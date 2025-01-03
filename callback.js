async function Hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function Adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function Hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla bla bla bla ...`);
      resolve(nombre);
    }, 1000);
  });
}

// -------------------------------------------
console.log("Iniciado el proceso ...");



async function main() {
  let nombre = await Hola("aye");
  await Hablar();
  await Hablar();
  await Hablar();
  await Hablar();
  await Adios(nombre);
  console.log("Terminamos el proceso")

}
console.log("Empezamos el proceso")
main();

