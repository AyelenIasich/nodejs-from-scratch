const os = require("node:os");

// plataforma windows - linux 
// console.log(os.platform());

// arquitectura x32 x64 
// console.log(os.arch());

// informacion sobre las cpus
// console.log(os.cpus());

// cantidad de cpus
// console.log(os.cpus().length);

// os.constants muestra las constantes de sistema
// console.log(os.constants)

// funciones auxiliares para mostrar la memoria
const SIZE = 1024;
const kb = (bytes) =>{return bytes / SIZE}
const mb = (bytes) =>{return kb(bytes) / SIZE}
const gb = (bytes) =>{return mb(bytes) / SIZE}

// muestra la memoria libre en bites
// console.log(gb(os.freemem()));

// muestra la memoria total 
// console.log(gb(os.totalmem()));

// me permite saber el directorio raiz
// console.log(os.homedir());

// me permite saber el hostname de mi maquina
// console.log(os.hostname());

// me muestra los directorios temporales
// console.log(os.tmpdir());

// puedo acceder a mi interfz de red activas en mi maquina
// console.log(os.networkInterfaces());



