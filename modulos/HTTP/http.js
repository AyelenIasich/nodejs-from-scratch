const http = require("node:http");

http.createServer(router).listen(3000);

function router(req, res){   
    console.log("Nueva peticion");
    console.log(req.url); 

    switch (req.url) {
        case "/hola":
            res.write("Hola, ¿como estas?");
            res.end();
            break;
        default:
            res.write("Error 404: No se lo que quieres");
            res.end();
    }
    
    // podemos cambiar el status de la respuesta y explicar el tipo de contenido que devuelve
    // res.writeHead(201, { "Content-Type": "text/plain" });
    // escribe en la pagina html
    // res.write("Hola mundo, se usar http de Node.js");
    // res.end();
};

console.log("Escuchando en el puerto 3000");