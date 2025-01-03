const { exec, spawn } = require("node:child_process");

// exec("dir", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;        
//     }
//     console.log(`stdout: ${stdout}`);
// });

// exec("node modulos/console/console.js", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;        
//     }
//     console.log(`stdout: ${stdout}`);
// });

let proceso = spawn("cmd.exe", ["/c", "dir", "/b"]);

// id del proceso
console.log(`ID del proceso: ${proceso.pid}`);
console.log(`Conexión establecida: ${proceso.connected}`);


proceso.stdout.on("data", (dato) => {
    console.log("¿Está muerto?");
    console.log(proceso.killed);
    console.log(dato.toString());
});

process.on("exit", () => {  
    console.log("El proceso ha terminado");
    console.log(proceso.killed);
});