const http = require("http");
const cursos = require("./cursos.js");
const { futimesSync } = require("fs");
const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return manejarGET(req, res);
    case "POST":
      return manejarPOST(req, res);
    case "PUT":
      return manejarPUT(req, res);
    case "DELETE":
      return manejarDELETE(req, res);
    default:
      console.log(`Método ${method} no soportado`);
  }
});

function manejarGET(req, res) {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    return res.end("Bienvenido a mi primer servidor y API creados con Node.js");
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos));
  } else if (path === "/cursos/matematicas") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else {
    res.statusCode = 404;
    return res.end("No se encontro el recurso solicitado");
  }
}

function manejarPOST(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    res.statusCode = 201;
    res.end("Se ha creado un nuevo recurso");
  } else {
    res.statusCode = 404;
    res.end("No se encontro el recurso solicitado");
  }
}

function manejarPUT(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    res.end("Se ha actualizado el recurso");
  } else {
    res.statusCode = 404;
    res.end("No se encontro el recurso solicitado");
  }
}

function manejarDELETE(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    res.end("Se ha eliminado el recurso");
  } else {
    res.statusCode = 404;
    res.end("No se encontro el recurso solicitado");
  }
}

server.listen(3000, () => console.log("server running on port 3000..."));
